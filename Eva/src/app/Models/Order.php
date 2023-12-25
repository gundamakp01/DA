<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory;
    protected $guarded = [];
    const STATUS_PENDING = 1;

    const STATUS_CONFIRMED = 2;

    const STATUS_COMPLETED = 3;
    protected static function boot()
    {
        parent::boot();

        self::creating(function ($model) {
            $model->status = self::STATUS_PENDING;
            $model->order_date = now();
        });
    }

    public function getOrderStatusTextAttribute()
    {
        $status = $this->status;
        if ($status == self::STATUS_PENDING) return 'Pending';
        if ($status == self::STATUS_CONFIRMED) return 'Confirmed';
        if ($status == self::STATUS_COMPLETED) return 'Completed';
        return null;
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class);
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class);
    }

    public function voucher(): BelongsTo
    {
        return $this->belongsTo(Voucher::class);
    }

    public function payment(): HasOne
    {
        return $this->hasOne(Payment::class, 'order_id', 'id');
    }
}
