<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Kjmtrue\VietnamZone\Models\District;
use Kjmtrue\VietnamZone\Models\Province;
use Kjmtrue\VietnamZone\Models\Ward;

class Address extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }
    
    public function yourProvince(): BelongsTo
    {
        return $this->belongsTo(Province::class, 'city');
    }

    public function yourDistrict(): BelongsTo
    {
        return $this->belongsTo(District::class, 'district');
    }

    public function yourWard(): BelongsTo
    {
        return $this->belongsTo(Ward::class, 'ward');
    }
}
