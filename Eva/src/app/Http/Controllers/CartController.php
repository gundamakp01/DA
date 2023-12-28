<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Http\Resources\CartResource;
use App\Repositories\CartRepository;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public $cartRepository;
    public $productRepository;

    public function __construct(CartRepository $cartRepository, ProductRepository $productRepository)
    {
        $this->cartRepository = $cartRepository;
        $this->productRepository = $productRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->responseOk(CartResource::collection(auth()->user()->carts()->whereNull('order_id')->get()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CartRequest $request)
    {
        $product = $this->productRepository->find($request->product_id);
        return $this->responseOk($this->cartRepository->create(array_merge(
            $request->validated(),
            [
                'size' => $request->size,
                'color' => $request->color,
                'user_id' => auth()->id(),
                'price' => $product->price,
                'discount' => $product->discount,
            ]
        )));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return $this->responseOk(new CartResource($this->cartRepository->find($id)));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, string $id)
    {
        return $this->responseOk($this->cartRepository->update($request->validated(), $id));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->cartRepository->delete($id);
    }

    public function getCartByOrderID(string $id)
    {
        return $this->responseOk(CartResource::collection($this->cartRepository->getCartByOrderID($id)));
    }
}
