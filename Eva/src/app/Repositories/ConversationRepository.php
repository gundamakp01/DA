<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Conversation;

class ConversationRepository extends BaseRepository
{

    public function model()
    {
        return Conversation::class;
    }

    public function getConversations($user)
    {
        return $this->model->where('user_id', $user->id)->latest()->paginate(20);
    }

    public function getRooms()
    {
        return $this->model->latest()->paginate(20);
    }

    public function getMessageByRoomId($roomId)
    {
        return $this->model->where('room_id', $roomId)->latest()->paginate(20);
    }
}
