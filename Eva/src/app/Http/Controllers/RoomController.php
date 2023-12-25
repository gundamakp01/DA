<?php

namespace App\Http\Controllers;

use App\Events\RoomEvent;
use App\Http\Resources\RoomCollection;
use App\Http\Resources\RoomResource;
use App\Models\Conversation;
use App\Repositories\RoomRepository;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    protected $roomRepository;

    public function __construct(RoomRepository $roomRepository)
    {
        $this->roomRepository = $roomRepository;
    }

    public function index()
    {
        $rooms = $this->roomRepository->getRooms();

        return $this->responseOk(new RoomCollection($rooms));
    }


    public function seen($roomId)
    {
        $room = $this->roomRepository->find($roomId);

        $conversations = $room->conversations()->where('status', '<>', Conversation::STATUS_SEEN);
        $conversations->update(['status' => Conversation::STATUS_SEEN]);
        $rooms = $this->roomRepository->getRooms();
        event(new RoomEvent(new RoomCollection($rooms)));
        return $this->responseOk();
    }
}
