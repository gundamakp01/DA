<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user' => new LiteUserResource($this->user),
            'order_date' => $this->order_date,
            'status' => $this->status,
            'status_text' => $this->order_status_text,
            'address' => new AddressResource($this->address),
            'voucher_id' => new VoucherResource($this->voucher),
            'payment' => new PaymentResource($this->payment)
        ];
    }
}
