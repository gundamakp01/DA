<?php

namespace App\Repositories;

use App\Models\Image;

class ImageRepository extends BaseRepository
{

    public function model()
    {
        return Image::class;
    }
}
