<?php

namespace App\Http\Controllers;

use App\Http\Resources\WishlistResource;
use Illuminate\Http\Request;
use App\Models\Wishlist;
use App\Repositories\ProductRepository;
use App\Repositories\WishlistRepository;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public $productRepository;
    public $wishlistRepository;

    public function __construct(WishlistRepository $wishlistRepository, ProductRepository $productRepository)
    {
        $this->wishlistRepository = $wishlistRepository;
        $this->productRepository = $productRepository;
    }
    public function index()
    {
        $user = Auth::user();
        $wishlists = $user->wishlists()->with('product')->get();

        return $this->responseOk(WishlistResource::collection($wishlists));
    }

    public function store($productId)
    {
        $user = Auth::user();
        $product = $this->productRepository->find($productId);

        $wishlistItem = new Wishlist(['user_id' => $user->id, 'product_id' => $product->id]);
        $user->wishlists()->save($wishlistItem);

        return $this->responseOk('Product added to wishlist successfully.');
    }

    public function destroy($productId)
    {
        $user = Auth::user();
        $product = $this->productRepository->find($productId);

        $user->wishlists()->where('product_id', $product->id)->delete();

        return $this->responseOk('Product removed from wishlist successfully.');
    }
}
