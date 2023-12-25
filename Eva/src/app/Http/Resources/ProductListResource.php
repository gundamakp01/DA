<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductListResource extends JsonResource
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
            'image' => new ImageResource($this->images()->first()) ?? null,
            'price' => number_format($this->price),
            'is_new' => $this->is_new,
            'discount' => $this->discount,
        ];
    }
}
