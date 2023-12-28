<?php

namespace App\Repositories;

use App\Models\Cart;

class CartRepository extends BaseRepository
{

    public function model()
    {
        return Cart::class;
    }

    public function changeStatusCartByUser(int $user_id, int $order_id)
    {
        return $this->model->where('user_id', $user_id)->whereNull('order_id')->update(['order_id' => $order_id]);
    }

    public function getCartByOrderID(string $order_id)
    {
        return $this->model->where('order_id', $order_id)->get();
    }
}
