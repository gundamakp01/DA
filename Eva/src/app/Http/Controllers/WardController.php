<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WardController extends Controller
{
    public function getWardsByProvince($district) {
        $wards = \Kjmtrue\VietnamZone\Models\Ward::where('district_id', $district)->get();
        return $this->responseOk($wards);
    }
}
