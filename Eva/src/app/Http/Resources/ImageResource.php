<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if (Str::contains($this->url, 'product.hstatic.net')) {
            $image_url = $this->url;
        } else {
            $image_url = $this->url ? url(Storage::url($this->url)) : null;
        }
        return [
            'id' => $this->id,
            'url' => $image_url,
            'name' => $this->name,
        ];
    }
}
