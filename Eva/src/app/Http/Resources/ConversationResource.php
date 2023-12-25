<?php

namespace App\Http\Resources;

use App\Models\Conversation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConversationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            '_id' => (string) $this->id,
            'content' => $this->message,
            'date' => (new Carbon($this->time))->format('j F'),
            'timestamp' => (new Carbon($this->time))->format('H:i'),
            'status' => $this->status,
            'seen' => $this->status === Conversation::STATUS_SEEN,
            'new' => $this->status !== Conversation::STATUS_SEEN,
            'deleted' => false,
            'senderId' => (string) $this->sendBy->id,
            'username' => $this->sendBy->name,
        ];
    }
}
