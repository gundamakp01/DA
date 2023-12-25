<?php

namespace App\Http\Resources;

use App\Http\Resources\PaginationResource;
use App\Http\Resources\ProductListResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductPaginationCollection extends ResourceCollection
{
    public $collects = ProductListResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'products' => ProductListResource::collection($this),
            'pagination' => new PaginationResource($this)
        ];
    }
}
