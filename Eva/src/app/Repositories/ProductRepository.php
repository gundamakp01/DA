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
            ->when($params && array_key_exists('brands', $params), function ($query) use ($params) {
                $brands = explode(',', $params['brands']);
                $query->whereIn('vendor', $brands);
            })->when($params && array_key_exists('price', $params), function ($query) use ($params) {
                $query->where('price', '>', $params['price']);
            })->when($params && array_key_exists('size', $params), function ($query) use ($params) {
                $size = explode(',', $params['size']);
                if (in_array('S', $size)) {
                    $query->where('size_s',  '>', 0);
                }
                if (in_array('M', $size)) {
                    $query->where('size_m',  '>', 0);
                }
                if (in_array('L', $size)) {
                    $query->where('size_l',  '>', 0);
                }
                if (in_array('XL', $size)) {
                    $query->where('size_xl',  '>', 0);
                }
            })->when($params && array_key_exists('discount', $params), function ($query) use ($params) {
                if ($params['discount'] == 50) {
                    $query->where('discount',  '>', 0)->where('discount', '<=', 50);
                }
                if ($params['discount'] == 70) {
                    $query->where('discount',  '<=', 70)->where('discount', '>', 50);
                }
            })->paginate(24);
    }
}
