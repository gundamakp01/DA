<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrderRepository extends BaseRepository
{

    public function model()
    {
        return Order::class;
    }

    public function getPaginateByAdmin(int $perPage)
    {
        return $this->model->latest()->paginate($perPage);
    }

    public function getPaginateByUser(int $id, int $perPage)
    {
        return $this->model->where('user_id', $id)->latest()->paginate($perPage);
    }

    public function sumRevenue()
    {
        return $this->model
            ->selectRaw('SUM(carts.price) as total_price')
            ->join('carts', 'carts.order_id', '=', 'orders.id')
            ->value('total_price');
    }

    public function getDataChart()
    {
        $currentMonth = now();
        $fourMonthsAgo = now()->subMonths(4);

        $revenueAndOrders = $this->model
            ->select(
                DB::raw('COALESCE(SUM(carts.price), 0) as total_revenue'),
                DB::raw('COALESCE(COUNT(DISTINCT orders.id), 0) as total_orders'),
                DB::raw('MONTH(orders.order_date) as month')
            )
            ->leftJoin('carts', 'orders.id', '=', 'carts.order_id')
            ->where('orders.order_date', '>=', $fourMonthsAgo)
            ->where('orders.order_date', '<=', $currentMonth)
            ->groupBy('month')
            ->orderBy('month')
            ->get();
        $numberOfMonths = $currentMonth->diffInMonths($fourMonthsAgo);

        $months = [];
        for ($i = 0; $i <= $numberOfMonths; $i++) {
            $month = $fourMonthsAgo->copy()->addMonths($i)->format('n');
            $months[] = $month;
        }

        $total_revenues = array_fill(0, count($months), 0);
        $total_orders = array_fill(0, count($months), 0);

        foreach ($revenueAndOrders as $data) {
            $index = array_search($data->month, $months);
            if ($index !== false) {
                $total_revenues[$index] = $data->total_revenue;
                $total_orders[$index] = $data->total_orders;
            }
        }

        return [
            'months' => $months,
            'total_revenues' => $total_revenues,
            'total_orders' => $total_orders
        ];
    }

    public function sumPriceByOrderID()
    {
        return $this->model
            ->selectRaw('SUM(carts.price) as total_price')
            ->join('carts', 'carts.order_id', '=', 'orders.id')
            ->value('total_price');
    }

    public function findWithSum($order_id)
    {
        return Order::selectRaw('orders.*, SUM((carts.price * ((100 - carts.discount) / 100)) * carts.quantity) as total_amount')
        ->join('carts', 'orders.id', '=', 'carts.order_id')
        ->where('orders.id', $order_id)
        ->groupBy('orders.id')
        ->first();
    }
}
