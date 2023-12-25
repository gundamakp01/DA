<?php

namespace App\Repositories;

use App\Models\Blog;

class BlogRepository extends BaseRepository
{

    public function model()
    {
        return Blog::class;
    }
}
