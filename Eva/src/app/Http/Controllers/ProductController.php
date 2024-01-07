<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Resources\ProductDetailResource;
use App\Http\Resources\ProductPaginationCollection;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public $productRepository;
    public $categoryRepository;


    public function __construct(ProductRepository $productRepository, CategoryRepository $categoryRepository)
    {
        $this->productRepository = $productRepository;
        $this->categoryRepository = $categoryRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = $this->productRepository->paginate(24);
        return $this->responseOk(new ProductPaginationCollection($products));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProductRequest $request)
    {
        $color = explode(',', trim($request->color));
        $request['color'] = json_encode($color);
        $product = $this->productRepository->create($request->only('name', 'price', 'description',
            'size_s', 'size_m', 'size_l', 'size_xl', 'color'));
        if ($images = $request->file('images')) {
            foreach ($images as $image) {
                $path = $image->store('public/uploads/images');
                $product->images()->create(
                    [
                        'url' => $path,
                        'name' => $image->getClientOriginalName(),
                        'imageable_id' => $product->id
                ]);
            }
        }
        return $product;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = $this->productRepository->find($id);
        return $this->responseOk(new ProductDetailResource($product));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CreateProductRequest $request, string $id)
    {
        $product = $this->productRepository->findOrFail($id);
        if ($images = $request->file('images')) {
            $product->images()->delete();
            foreach ($images as $image) {
                $path = $image->store('public/uploads/images');
                $product->images()->create(
                    [
                        'url' => $path,
                        'name' => $image->getClientOriginalName(),
                        'imageable_id' => $product->id
                    ]);
            }
        }
        $color = explode(',', trim($request->color));
        $request['color'] = json_encode($color);
        return $this->productRepository->update($request->only('name', 'price', 'description',
            'size_s', 'size_m', 'size_l', 'size_xl', 'color'), $product->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->productRepository->delete($id);
    }

    public function getProductByCategoryId($categoryId, Request $request)
    {
        $category = $this->categoryRepository->getDescendantsAndSelf($categoryId);
        $categoryIds = $category->pluck('id');
        $products = $this->productRepository->getProductByCategoryIds($categoryIds, $request->search);
        return $this->responseOk(new ProductPaginationCollection($products));
    }
}
