<?php

namespace App\Http\Controllers;

use App\Events\RoomEvent;
use App\Http\Resources\RoomCollection;
use App\Models\Conversation;
use App\Repositories\ConversationRepository;
use App\Repositories\RoomRepository;

class ConversationController extends Controller
{
    protected $conversationRepository;
    protected $roomRepository;

    public function __construct(ConversationRepository $conversationRepository, RoomRepository $roomRepository)
    {
        $this->conversationRepository = $conversationRepository;
        $this->roomRepository = $roomRepository;
    }

    public function seen($conversationId)
    {
        $conversation = $this->conversationRepository->find($conversationId);
        $conversation->update(['status' => Conversation::STATUS_SEEN]);
        $rooms = $this->roomRepository->getRooms();
        event(new RoomEvent(new RoomCollection($rooms)));
        return $this->responseOk();
    }
}
