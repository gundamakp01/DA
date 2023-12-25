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

    public function getProductByCategoryIds($categoryIds)
    {
        return $this->model->whereIn('category_id', $categoryIds)->paginate(24);
    }
}
