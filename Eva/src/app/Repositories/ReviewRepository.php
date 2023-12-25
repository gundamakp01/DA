<?php

namespace App\Repositories;

use App\Models\Review;

class ReviewRepository extends BaseRepository
{

    public function model()
    {
        return Review::class;
    }
}
