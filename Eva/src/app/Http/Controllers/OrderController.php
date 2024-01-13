<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductDetailResource;
use App\Models\User;
use App\Repositories\AddressRepository;
use App\Repositories\CartRepository;
use App\Repositories\OrderRepository;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $orderRepository;
    protected $cartRepository;
    protected $addressRepository;
    public function __construct(
        OrderRepository $orderRepository, 
        CartRepository $cartRepository, 
        AddressRepository $addressRepository
    )
    {
        $this->orderRepository = $orderRepository;
        $this->cartRepository = $cartRepository;
        $this->addressRepository = $addressRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = [];
        if (auth()->user()->role == User::ROLE_ADMIN) {
            $orders = $this->orderRepository->getPaginateByAdmin(24);
        } else {
            $orders = $this->orderRepository->getPaginateByUser(auth()->id(), 24);
        }
        return $this->responseOk(new OrderCollection($orders));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $address = $this->addressRepository->create($request->address);
        $order = $this->orderRepository->create([
            'user_id' => auth()->id(),
            'voucher_id' => $request->voucher_id ?? null,
            'address_id' => $address->id ?? null,
        ]);
        $this->cartRepository->changeStatusCartByUser(auth()->id(), $order->id);

        $order->payment()->create([
            'payment_method' => 1,
            'payment_date' => now()
        ]);
        return $this->responseOk(new OrderResource($order));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = $this->orderRepository->findOrFail($id);
        return $this->responseOk(new OrderResource($order));
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
        return $this->orderRepository->delete($id);
    }

    public function changeStatus(Request $request)
    {
        $order = $this->orderRepository->findOrFail($request->id);
        return $this->orderRepository->update([
            'status' => $request->status
        ], $order->id);
    }
}
