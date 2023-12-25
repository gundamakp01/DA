<?php

namespace App\Http\Resources;

use App\Http\Resources\PaginationResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ConversationCollection extends ResourceCollection
{
    public $collects = ConversationResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'conversation' => ConversationResource::collection($this->sortBy('created_at')),
            'pagination' => new PaginationResource($this)
        ];
    }
}
