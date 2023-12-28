<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            'product_name' => $this->product->name ?? null,
            'product_image' => $this->product->name ?? null,
            'image' => new ImageResource($this->product->images()->first()) ?? null,
            'quantity' => $this->quantity,
            'price' => number_format($this->price),
            'discount' => $this->discount,
            'size' => strtoupper($this->size),
            'color' => $this->color,
            'material' => $this->material,
        ];
    }
}
