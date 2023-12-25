<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use App\Events\RoomEvent;
use App\Http\Resources\ConversationCollection;
use App\Http\Resources\ConversationResource;
use App\Http\Resources\RoomCollection;
use App\Http\Resources\RoomResource;
use App\Models\Conversation;
use App\Repositories\ConversationRepository;
use App\Repositories\RoomRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public $conversationRepository;
    public $userRepository;
    public $roomRepository;

    public function __construct(
        ConversationRepository $conversationRepository,
        UserRepository $userRepository,
        RoomRepository $roomRepository
    ) {
        $this->conversationRepository = $conversationRepository;
        $this->userRepository = $userRepository;
        $this->roomRepository = $roomRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $room = $this->roomRepository->getRoomOfUser($user->id);
        $conversations = $this->conversationRepository->getMessageByRoomId($room->id);

        return $this->responseOk(new ConversationCollection($conversations));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $message = $request->input('message');
        $receiver = $request->input('user_id');
        $sender = auth()->id();
        $room = $this->roomRepository->getRoom($sender, $receiver);
        if (!$room) {
            $room = $this->roomRepository->create([
                'sender' => $sender,
                'receiver' => $receiver,
            ]);
        } else {
            $this->roomRepository->update([
                'updated_at' => now(),
            ], $room->id);
        }
        $conversation = $this->conversationRepository->create([
            'room_id' => $room->id,
            'receiver' => $receiver, // Set this based on your logic for user/admin chat
            'sender' => $sender,
            'message' => $message,
            'time' => now(),
            'status' => Conversation::STATUS_PENDING
        ]);

        $rooms = $this->roomRepository->getRooms();
        event(new ChatEvent(new ConversationResource($conversation), $receiver));
        event(new RoomEvent(new RoomCollection($rooms)));

        $conversation = $this->conversationRepository->update([
            'status' => Conversation::STATUS_SENT
        ], $conversation->id);

        return $this->responseOk(new ConversationResource($conversation));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $conversation = $this->conversationRepository->find($id);

        return $this->responseOk(new ConversationResource($conversation));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getMessageByRoomId($roomId)
    {
        $conversation = $this->conversationRepository->getMessageByRoomId($roomId);

        return $this->responseOk(new ConversationCollection($conversation));
    }
}
