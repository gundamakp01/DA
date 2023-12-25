<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function sendBy()
    {
        return $this->belongsTo(User::class, 'sender');
    }

    public function receiveBy()
    {
        return $this->belongsTo(User::class, 'receiver');
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }

    public function getRoomNameAttribute()
    {
        if ($this->sendBy->role !== User::ROLE_ADMIN) {
            return $this->sendBy->name;
        }
        return $this->receiveBy->name;
    }

    public function getUserNameAttribute()
    {
        if ($this->sendBy->role !== User::ROLE_ADMIN) {
            return $this->sendBy->email;
        }
        return $this->receiveBy->email;
    }
}
