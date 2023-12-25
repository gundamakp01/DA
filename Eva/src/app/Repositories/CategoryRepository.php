<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository extends BaseRepository
{

    public function model()
    {
        return Category::class;
    }

    public function getDescendantsAndSelf($categoryId)
    {
        return $this->model->descendantsAndSelf($categoryId);
    }

    public function getAllParent()
    {
        return $this->model->whereNull('parent_id')->get();
    }

    public function getCategoryByParentId($categoryId)
    {
        return $this->model->where('parent_id', $categoryId)->get();
    }
}
