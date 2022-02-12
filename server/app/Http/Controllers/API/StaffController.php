<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Validation\Rule;

class StaffController extends Controller
{
    public function index(){

        $staff = Staff::all();
        return response()->json([
            'status' => 200,
            'staff' => $staff
        ]);

        // $staff = Staff::join('users', 'users.foreign_id', '=', 'staff.id')->get(['users.*', 'staff.*']);

        // return response()->json([
        //         'status' => 200,
        //         'staff' => $staff
        //     ]);


    }

    public function insert(Request $request){

        $validator = Validator::make($request->all(),[
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
            'email' => 'required|max:191|email|unique:users,email',
            'username' => 'required|unique:users,username',
            'password' => 'required',
            'phone' => 'required|min:10|max:11',
            'address' => 'required',
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]
        );

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }else{
            $user = User::create([
                'role' => $request->role,
                'firstname'=> $request->firstname,
                'lastname'=> $request->lastname,
                'email'=> $request->email,
                'username'=> $request->username,
                'password' =>Hash::make($request->password),
            ]);
            if($user){
                $staff = new Staff();
                $staff->user_id = $user->id;
                $staff->phone = $request->phone;
                $staff->address = $request->address;
                if($request->hasFile('photo')){
                    $file = $request->file('photo');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/staff/', $filename);
                    $staff->photo = 'uploads/staff/'.$filename;
                }
                $staff->save();
                $response = Staff::find($staff->id);
                return response()->json([
                    'status' => 200,
                    'response' => $response,
                    'message' => 'Staff Added!'
                ]);
            }
        }
    }

    public function update(Request $request , $id){

       // $user_id = auth('sanctum')->user()->id;
      // $idx = 10;
     //  $finduser = User::where('foreign_id',$id)->first();
        $validator = Validator::make($request->all(),[
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
           // 'email' => 'required|max:191|email|unique:users,email',
           'email' => 'required|max:191|email|unique:users,email,'.$id,
         //  'required', Rule::unique('items')->ignore($this->id)
            //'email' => 'required|email|unique:users,email,'.$user_id,
           // 'username' => 'required|unique:users,username',

          // 'email' => ['required', Rule::unique('users')->],
            'phone' => 'required|min:10|max:11',
            'address' => 'required',
        ]
        );

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }else{

            $user = User::find($id);
            if($user){
                $user->firstname = $request->firstname;
                $user->lastname = $request->lastname;
                $user->email = $request->email;
                $user->username = $request->username;
                $user->update();
            }

            $finduser = Staff::where('user_id',$user->id)->first();
            $staff = Staff::find($finduser->id);
            if($staff){
                 $staff->phone = $request->phone;
                 $staff->address = $request->address;
                if($request->hasFile('photo')){

                //if want to delete file directory if updated
                    $path = $staff->photo;
                    if(File::exists($path)){
                        File::delete($path);
                    }

                    $file = $request->file('photo');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/staff/', $filename);
                    $staff->photo = 'uploads/staff/'.$filename;
                }
                $staff->update();
                return response()->json([
                    'status' => 200,
                    'response' => $staff,
                    'message' => 'Staff Updated!'

                ]);
            }

        }


    }



    public function destroy($id){

            $user = User::find($id);
            if($user){
                $user->delete();
                $findstaff = Staff::where('user_id',$user->id)->first();
                $staff = Staff::find($findstaff->id);
                //delete also the photo in folder directory
                $path = $staff->photo;
                if(File::exists($path)){
                File::delete($path);
                }
                $staff->delete();
                return response()->json([
                    'status' => 200,
                    'message' => 'Staff Deleted Successfully:'
                ]);
            }else{
                return response()->json([
                    'status' => 404,
                    'errors' => [
                       'message' => 'Cant Find Category Item!']
                ]);
            }

    }







}
