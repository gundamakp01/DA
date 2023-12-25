<?php

namespace App\Http\Controllers;

use App\Repositories\ProductRepository;
use App\Repositories\OrderRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    protected $orderRepository;
    protected $productRepository;
    protected $userRepository;
    public function __construct(OrderRepository $orderRepository,
                                productRepository $productRepository,
                                UserRepository $userRepository
    )
    {
        $this->orderRepository = $orderRepository;
        $this->productRepository = $productRepository;
        $this->userRepository = $userRepository;
    }
    public function index() {
        $count_orders = $this->orderRepository->all()->count();
        $count_products = $this->productRepository->all()->count();
        $count_users = $this->userRepository->all()->count();
        $sum_revenue = $this->orderRepository->sumRevenue();
        $data_chart = $this->orderRepository->getDataChart();
        return $this->responseOk([
            'count_orders' => $count_orders,
            'count_products' => $count_products,
            'count_users' => $count_users,
            'sum_revenue' => $sum_revenue,
            'data_chart' => $data_chart
        ]);
    }
}
