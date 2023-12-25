<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;
    protected $guarded = [];

    const STATUS_PENDING = 0;
    const STATUS_SENT = 1;
    const STATUS_SEEN = 2;
    public function sendBy()
    {
        return $this->belongsTo(User::class, 'sender');
    }

    public function receiveBy()
    {
        return $this->belongsTo(User::class, 'receiver');
    }
}
