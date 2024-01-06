<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\WardController;
use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::put('me', [UserController::class, 'editProfile']);
    Route::apiResource('carts', CartController::class);
    Route::get('carts-order/{id}', [CartController::class, 'getCartByOrderID']);
    Route::post('orders/change-status', [OrderController::class, 'changeStatus']);
    Route::apiResource('orders', OrderController::class);
    Route::get('users/vnpay-payment/{id}', [UserController::class, 'payment'])->name('vnpay-payment');
    Route::get('home', [HomeController::class, 'index']);
    Route::apiResource('chats', ChatController::class);
    Route::apiResource('rooms', RoomController::class);
    Route::apiResource('users', UserController::class);
    Route::post('users/signup', [UserController::class, 'signup']);
    Route::get('rooms/{roomId}/messages', [ChatController::class, 'getMessageByRoomId']);
    Route::post('rooms/{roomId}/seen', [RoomController::class, 'seen']);
    Route::post('conversations/{conversationId}/seen', [ConversationController::class, 'seen']);
    Route::resource('/wishlist', WishlistController::class)->only(['index', 'store', 'destroy']);
    Route::post('products/{productId}/reviews', [ReviewController::class, 'store']);
});

Route::apiResource('products', ProductController::class)->except(['update']);
Route::post('products/{id}', [ProductController::class, 'update']);
Route::apiResource('categories', CategoryController::class)->except(['update']);
Route::post('categories/{id}', [CategoryController::class, 'update']);
Route::apiResource('blogs', BlogController::class)->except(['update']);
Route::post('blogs/{blog}', [BlogController::class, 'update']);
Route::prefix('categories')->controller(CategoryController::class)->group(function () {
    Route::get('/{categoryId}/products', [ProductController::class, 'getProductByCategoryId']);
    Route::get('/{categoryId}/children', [CategoryController::class, 'getCategoryByParentId']);
});
Route::get('/provinces', [ProvinceController::class, 'index']);
Route::get('/provinces/{provinceId}/districts', [DistrictController::class, 'getDistrictByProvince']);
Route::get('/districts/{districtId}/wards', [WardController::class, 'getWardsByProvince']);
