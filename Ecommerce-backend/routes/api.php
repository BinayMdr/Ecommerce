<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MainController;
use App\Http\Controllers\Api\CartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
    
Route::post('login', [AuthController::class,'login']);
Route::post('logout', [AuthController::class.'logout']);
Route::post('refresh', [AuthController::class,'refresh']);
Route::post('me', [AuthController::class,'me']);

Route::get('get-products',[MainController::class,'index']);
Route::get('get-products-details',[MainController::class,'get_details']);

Route::get('add-to-cart',[CartController::class,'add_to_cart']);

Route::post('checkout',[MainController::class,'checkout']);
