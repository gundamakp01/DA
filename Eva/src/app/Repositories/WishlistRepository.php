<?php

namespace App\Repositories;

use App\Models\Wishlist;

class WishlistRepository extends BaseRepository
{

    public function model()
    {
        return Wishlist::class;
    }
}
