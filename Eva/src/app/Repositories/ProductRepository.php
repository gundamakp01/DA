<?php

namespace App\Repositories;

use App\Models\Admin;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductRepository extends BaseRepository
{

    public function model()
    {
        return Product::class;
    }

    public function getProductByCategoryIds($categoryIds, $params)
    {
        return $this->model->whereIn('category_id', $categoryIds)
            ->when(array_key_exists('brands', $params), function ($query) use ($params) {
                $query->whereIn('vendor', $params['brands']);
            })->when(array_key_exists('price', $params), function ($query) use ($params) {
                $query->where('price', '>', $params['price']);
            })->when(array_key_exists('size', $params), function ($query) use ($params) {
            })->paginate(24);
    }
}
