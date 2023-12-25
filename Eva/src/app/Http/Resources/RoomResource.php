<?php

namespace App\Http\Resources;

use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            '_id' => $this->id,
            'roomId' => $this->id,
            'roomName' => $this->room_name,
            'avatar' => 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
            'unreadCount' => $this->conversations()->where('status', '<>', Conversation::STATUS_SEEN)->count(),
            'username' => $this->user_name,
            'lastMessage' => new ConversationResource($this->conversations()->latest()->first()),
            'users' => [
                new UserOfConversationResource($this->sendBy),
                new UserOfConversationResource($this->receiveBy),
            ],
            'lastUpdated' => $this->updated_at,
        ];
    }
}
