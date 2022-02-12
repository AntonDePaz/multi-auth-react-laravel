<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){

        $validator = Validator::make($request->all(),[
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
            'email' => 'required|max:191|email|unique:users,email',
            'username' => 'required|unique:users,username',
            'password' => 'required|min:4',
            'confirmpassword' => 'required_with:password|same:password|min:4'
        ]
        );

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }else{

            $user = User::create([
                'firstname'=> $request->firstname,
                'lastname'=> $request->lastname,
                'email'=> $request->email,
                'username'=> $request->username,
                'password' =>Hash::make($request->password),
            ]);

            $token = $user->createToken($user->email.'_Token')->plainTextToken;

            $data = [
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,
                     'token' => $token,
                    'message' => 'Account Registered Successfully'
            ];

            return response()->json([
                'status' => 200,
                'data' => $data,

            ]);
        }

    }


    public function login(Request $request){

        $validator = Validator::make($request->all(),[
            'username' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()){

            return response([
                'status' => 400,
                'errors' => $validator->messages()
            ]);

        }else{


            //$cart = Cart::where('id',$id)->where('user_id',$user_id)->first();
            $user = User::where('username', $request->username)->where('role' , $request->role)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {

                return response()->json([
                    'status' => 401,
                    'errors' => [
                        'message' =>'The provided credentials are Incorrect.'
                    ]
                ]);
            }else{

                if($user->role == 1){  // 1 = Guest
                    $token = $user->createToken($user->email.'_guesttoken', ['guest'])->plainTextToken;
                }else if($user->role == 2){ // 2 = Staff
                    $token = $user->createToken($user->email.'_stafftoken', ['staff'])->plainTextToken;

                }else if($user->role == 3){ // 3 = Admin
                    $token = $user->createToken($user->email.'_admintoken', ['admin'])->plainTextToken;
                }
                else{
                    $token = $user->createToken($user->email.'_studenttoken', ['student'])->plainTextToken;
                }
                $data = [
                    'firstname' => $user->firstname,
                    'lastname' => $user->lastname,
                    'role' => $user->role,
                    'token' => $token,
                    'message' => 'Logged In Successfully',
                ];

                return response()->json([
                    'status' => 200,
                    'data' => $data
                ]);


        }


    }

}

    public function logout(){

        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged Out Successfully',
        ]);

    }


    public function refreshtoken(){
        auth()->user()->tokens()->delete();
        $user = auth('sanctum')->user();

       // $user = User::where('username', $request->username)->where('role' , $request->role)->first();
                if($user->role == 1){  // 1 = Guest
                   $token = $user->createToken($user->email.'_guesttoken', ['guest'])->plainTextToken;
                }else if($user->role == 2){ // 2 = Staff
                    $token = $user->createToken($user->email.'_stafftoken', ['staff'])->plainTextToken;

                }else if($user->role == 3){ // 3 = Admin
                    $token = $user->createToken($user->email.'_admintoken', ['admin'])->plainTextToken;
                }
                else{
                    $token = $user->createToken($user->email.'_studenttoken', ['student'])->plainTextToken;
                }
                $data = [
                    'firstname' => $user->firstname,
                    'lastname' => $user->lastname,
                    'role' => $user->role,
                    'token' => $token,
                    'message' => 'Refresh In Successfully',
                ];

                return response()->json([
                    'status' => 200,
                    'data' => $data
                ]);

       // auth()->user()->tokens()->delete();
       /// if(auth()->user()->tokens()){
        //     return response()->json([
        //     'status' => 200,
        //     'user' =>  $user
        //   ]);
       // }
      //  return response()->json([
       //     'status' => 400,
       //     'message' => 'Please Login First',
      //  ]);

    }




}
