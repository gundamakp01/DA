<?php

namespace App\Repositories;

use App\Models\Address;

class AddressRepository extends BaseRepository
{

    public function model()
    {
        return Address::class;
    }
}
