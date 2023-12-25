<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory;
    protected $guarded = [];

    const TYPE_CASH = 1;

    const TYPE_VNPAY = 2;

    public function getPaymentMethodTextAttribute()
    {
        $type = $this->payment_method;
        if ($type == self::TYPE_CASH) return 'Tiền mặt';
        if ($type == self::TYPE_VNPAY) return 'VNPAY';
        return null;
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
