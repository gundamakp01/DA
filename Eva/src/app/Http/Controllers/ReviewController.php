<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Repositories\ReviewRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    protected $reviewRepository;

    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }

    public function store(ReviewRequest $request, $productId)
    {

        $arrayFind = [
            'product_id' => $productId,
            'user_id' => auth()->id()
        ];
        $review = $this->reviewRepository->updateOrCreate($arrayFind, array_merge($request->validated(), [
            'product_id' => $productId,
            'user_id' => auth()->id()
        ]));

        return $this->responseOk(new ReviewResource($review));
    }
}
