<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\StaffController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);


Route::middleware(['auth:sanctum','isAdmin'])->group(function (){

    Route::get('admin/checkAuth' , function () {
        return response()->json([
                'status' => 200,
                'message' => 'You are In Admin'
            ], 200);
    });
    //staff
    Route::post('staff/insert' , [StaffController::class, 'insert']);
    Route::get('staff/get' , [StaffController::class, 'index']);
    Route::post('staff/update/{id}' , [StaffController::class, 'update']);
    Route::delete('staff/delete/{id}' , [StaffController::class, 'destroy']);



});
Route::middleware(['auth:sanctum','isStaff'])->group(function (){

    Route::get('staff/checkAuth' , function () {
        return response()->json([
                'status' => 200,
                'message' => 'You are In Staff'
            ], 200);
    });

});




//can do logout all users
Route::middleware(['auth:sanctum'])->group(function (){
    Route::post('auth/logout', [AuthController::class, 'logout']);
});



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
