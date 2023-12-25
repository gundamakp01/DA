<?php

namespace App\Events;

use App\Models\Conversation;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $conversation;
    public $userId;

    public function __construct($conversation, int $userId)
    {
        $this->conversation = $conversation;
        $this->userId = $userId;
    }

    public function broadcastOn()
    {
        return new Channel('chat.' . $this->userId);
    }

    public function broadcastAs()
    {
        return 'chat-event';
    }
}
