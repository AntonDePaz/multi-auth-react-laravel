<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Validation\Rule;

class StaffController extends Controller
{
    public function index(){

        // $staff = Staff::all();
        // return response()->json([
        //     'status' => 200,
        //     'staff' => $staff
        // ]);

        $staff = Staff::join('users', 'users.foreign_id', '=', 'staff.id')->get(['users.*', 'staff.*']);

        return response()->json([
                'status' => 200,
                'staff' => $staff
            ]);


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



            $staff = new Staff();
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

            $user = '';
            if($staff){
                $user = User::create([
                    'foreign_id' => $staff->id,
                    'role' => $request->role,
                    'firstname'=> $request->firstname,
                    'lastname'=> $request->lastname,
                    'email'=> $request->email,
                    'username'=> $request->username,
                    'password' =>Hash::make($request->password),
                ]);
            }
            if($user){
                return response()->json([
                    'status' => 200,
                    'message' => [
                       'message' => 'Staff Insert Successfully']

                ]);
            }

        }
    }

    public function update(Request $request , $id){

       // $user_id = auth('sanctum')->user()->id;
        $validator = Validator::make($request->all(),[
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
           // 'email' => 'required|max:191|email|unique:users,email',
           //'email' =>  Rule::unique('users')->ignore($id),

         //  'required', Rule::unique('items')->ignore($this->id)
            //'email' => 'required|email|unique:users,email,'.$user_id,
           // 'username' => 'required|unique:users,username',
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

            $staff = Staff::find($id);
            if($staff){
                 $staff->phone = $request->phone;
                 $staff->address = $request->address;
                if($request->hasFile('photo')){

                // //if want to delete file if updated
                //     $path = $staff->photo;
                //     if(File::exists($path)){
                //         File::delete($path);
                //     }

                    $file = $request->file('photo');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/staff/', $filename);
                    $staff->photo = 'uploads/staff/'.$filename;
                }
                $staff->update();

                $finduser = User::where('foreign_id',$id)->first();
                $user = User::find($finduser->id);
                if($user){
                    $user->firstname = $request->firstname;
                    $user->lastname = $request->lastname;
                    $user->email = $request->email;
                    $user->username = $request->username;
                    $user->update();
                }
            }
            return response()->json([
                'status' => 200,
                'message' => [
                   'message' => 'Staff Update Successfully:']

            ]);

        }


    }



    public function destroy($id){

            $staff = Staff::find($id);
            if($staff){
                $staff->delete();
                $finduser = User::where('foreign_id',$id)->first();
                $user = User::find($finduser->id);
                $user->delete();
                return response()->json([
                    'status' => 200,
                    'message' => [
                       'message' => 'Staff Deleted Successfully:']
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
