<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\StaffController;
use App\Http\Controllers\API\StudentController;
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
                'role' => 3,
                'message' => 'You are In Admin'
            ], 200);
    });
    //staff
    Route::post('staff/insert' , [StaffController::class, 'insert']);
    Route::get('staff/get' , [StaffController::class, 'index']);
    Route::post('staff/update/{id}' , [StaffController::class, 'update']);
    Route::delete('staff/delete/{id}' , [StaffController::class, 'destroy']);

    //student

    Route::get('students' , [StudentController::class, 'index']);
    Route::get('student/getcourse' , [StudentController::class, 'getcourse']);
    Route::post('student/insert' , [StudentController::class, 'insert']);
    Route::post('student/update/{id}' , [StudentController::class, 'update']);
    Route::delete('student/delete/{id}' , [StudentController::class, 'destroy']);
    Route::post('student/uploadcsv' , [StudentController::class, 'uploadcsv']);


});



Route::middleware(['auth:sanctum','isStaff'])->group(function (){

    Route::get('staff/checkAuth' , function () {
        return response()->json([
                'status' => 200,
                'role' => 2,
                'message' => 'You are In Staff'
            ], 200);
    });

});

Route::middleware(['auth:sanctum','isStudent'])->group(function (){

    Route::get('student/checkAuth' , function () {
        return response()->json([
                'status' => 200,
                'role' => 0,
                'message' => 'You are In Stundent'
            ], 200);
    });

});




//can do logout all users
Route::middleware(['auth:sanctum'])->group(function (){

    Route::post('auth/logout', [AuthController::class, 'logout']);
    Route::get('auth/checkAuth', [AuthController::class, 'refreshtoken']);

});



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
