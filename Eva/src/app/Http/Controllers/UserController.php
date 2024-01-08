<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Order;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use App\Repositories\OrderRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $orderRepository;
    public function __construct(UserRepository $userRepository, OrderRepository $orderRepository)
    {
        $this->userRepository = $userRepository;
        $this->orderRepository = $orderRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = $this->userRepository->paginate();
        return $this->responseOk(new UserCollection($users));
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = $this->userRepository->find($id);
        return $this->responseOk(new UserResource($user));
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
        $user = $this->userRepository->findOrFail($id);
        return $this->userRepository->update($request->only('name', 'email', 'phone_number', 'address'), $user->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->userRepository->delete($id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function signup(SignUpRequest $request)
    {
        return $this->userRepository->create($request->only('name', 'email', 'phone_number', 'password','province_id', 'district_id', 'ward_id'));
    }

    public function editProfile(Request $request)
    {
        return $this->userRepository->update($request->only('name', 'phone_number','province_id', 'district_id', 'ward_id'), auth()->id());
    }

    public function payment(Request $request) {
        $order = $this->orderRepository->findWithSum($request->id);
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://localhost:5173";
        $vnp_TmnCode = "24UAIXK5";//Mã website tại VNPAY
        $vnp_HashSecret = "QPMYIBZROQSBGDVXUSMHFRIHRELGSZNW"; //Chuỗi bí mật

        $vnp_TxnRef = $order->id;
        $vnp_OrderInfo = 'Thanh toán đơn hàng';
        $vnp_OrderType = 'billpayment';
        $vnp_Amount = ($order->total_amount + 35000) * 100;
        $vnp_Locale = 'vn';
        $vnp_BankCode = "NCB";
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];
//Add Params of 2.0.1 Version
//        $vnp_ExpireDate = $_POST['txtexpire'];
//Billing
//        $vnp_Bill_Mobile = $_POST['txt_billing_mobile'];
//        $vnp_Bill_Email = $_POST['txt_billing_email'];
//        $fullName = trim($_POST['txt_billing_fullname']);
//        if (isset($fullName) && trim($fullName) != '') {
//            $name = explode(' ', $fullName);
//            $vnp_Bill_FirstName = array_shift($name);
//            $vnp_Bill_LastName = array_pop($name);
//        }
//        $vnp_Bill_Address=$_POST['txt_inv_addr1'];
//        $vnp_Bill_City=$_POST['txt_bill_city'];
//        $vnp_Bill_Country=$_POST['txt_bill_country'];
//        $vnp_Bill_State=$_POST['txt_bill_state'];
//// Invoice
//        $vnp_Inv_Phone=$_POST['txt_inv_mobile'];
//        $vnp_Inv_Email=$_POST['txt_inv_email'];
//        $vnp_Inv_Customer=$_POST['txt_inv_customer'];
//        $vnp_Inv_Address=$_POST['txt_inv_addr1'];
//        $vnp_Inv_Company=$_POST['txt_inv_company'];
//        $vnp_Inv_Taxcode=$_POST['txt_inv_taxcode'];
//        $vnp_Inv_Type=$_POST['cbo_inv_type'];
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
//            "vnp_ExpireDate"=>$vnp_ExpireDate,
//            "vnp_Bill_Mobile"=>$vnp_Bill_Mobile,
//            "vnp_Bill_Email"=>$vnp_Bill_Email,
//            "vnp_Bill_FirstName"=>$vnp_Bill_FirstName,
//            "vnp_Bill_LastName"=>$vnp_Bill_LastName,
//            "vnp_Bill_Address"=>$vnp_Bill_Address,
//            "vnp_Bill_City"=>$vnp_Bill_City,
//            "vnp_Bill_Country"=>$vnp_Bill_Country,
//            "vnp_Inv_Phone"=>$vnp_Inv_Phone,
//            "vnp_Inv_Email"=>$vnp_Inv_Email,
//            "vnp_Inv_Customer"=>$vnp_Inv_Customer,
//            "vnp_Inv_Address"=>$vnp_Inv_Address,
//            "vnp_Inv_Company"=>$vnp_Inv_Company,
//            "vnp_Inv_Taxcode"=>$vnp_Inv_Taxcode,
//            "vnp_Inv_Type"=>$vnp_Inv_Type
        );

        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        if (isset($vnp_Bill_State) && $vnp_Bill_State != "") {
            $inputData['vnp_Bill_State'] = $vnp_Bill_State;
        }

//var_dump($inputData);
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        $returnData = array('code' => '00'
        , 'message' => 'success'
        , 'data' => $vnp_Url);
        if (isset($_POST['redirect'])) {
            header('Location: ' . $vnp_Url);
            die();
        } else {
            $order->update(['status' => 2]);
            $order->payment()->update(['payment_method' => 2]);
            echo json_encode($returnData);
        }
    }
}
