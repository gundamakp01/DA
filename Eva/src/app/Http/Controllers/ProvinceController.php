<?php

namespace App\Http\Controllers;

use App\Repositories\ProductRepository;
use App\Repositories\OrderRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function index() {
        $provinces = \Kjmtrue\VietnamZone\Models\Province::get();
        return $this->responseOk($provinces);
    }
}
