<?php

namespace App\Repositories;

use App\Models\Room;

class RoomRepository extends BaseRepository
{

    public function model()
    {
        return Room::class;
    }

    public function getRoom($sender, $receiver)
    {
        return $this->model->where(function ($query) use ($sender, $receiver) {
            return $query->where('sender', $sender)->where('receiver', $receiver);
        })->orWhere(function ($query) use ($sender, $receiver) {
            return $query->where('sender', $receiver)->where('receiver', $sender);
        })->first();
    }

    public function getRooms()
    {
        return $this->model->latest('updated_at')->paginate(24);
    }

    public function getRoomOfUser($userId)
    {
        return $this->model->where('sender', $userId)->orWhere('receiver', $userId)->first();
    }
}
