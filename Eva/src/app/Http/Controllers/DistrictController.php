<?php

namespace App\Http\Controllers;

use App\Repositories\ProductRepository;
use App\Repositories\OrderRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    public function getDistrictByProvince($provinceId) {
        $districts = \Kjmtrue\VietnamZone\Models\District::where('province_id', $provinceId)->get();
        return $this->responseOk($districts);
    }
}
