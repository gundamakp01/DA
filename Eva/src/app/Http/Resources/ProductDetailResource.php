<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'category' => new CategoryResource($this->category) ?? null,
            'image' => ImageResource::collection($this->images) ?? null,
            'description' => $this->description,
            'price' => number_format($this->price),
            'size_s' => $this->size_s,
            'size_m' => $this->size_m,
            'size_l' => $this->size_l,
            'size_xl' => $this->size_xl,
            'is_new' => $this->is_new,
            'discount' => $this->discount,
            'vendor' => $this->vendor,
            'material' => $this->material,
            'color' => json_decode($this->color),
        ];
    }
}
