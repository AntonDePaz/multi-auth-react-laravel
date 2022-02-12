<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Student;
use Illuminate\Support\Facades\File;

use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ImportStudent;
use App\Exports\ExportStudent;


class StudentController extends Controller
{
    public function getcourse(){

        $course = Course::all();
        return response()->json([
            'status' => 200,
            'course' => $course
        ]);

    }

    public function index(){

        $students = Student::all();
        return response()->json([
            'status' => 200,
            'students' => $students
        ]);
    }

    public function insert(Request $request){

        $validator = Validator::make($request->all(),[
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
            'idnumber' => 'required|max:191',
            'phone' => 'required|min:10|max:11',
            'username' => 'required|unique:users,username',
            'email' => 'required|email|unique:users,email',
            //'course' => 'required',
            'password' => 'required|min:4',
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
                'firstname'=> $request->firstname,
                'lastname'=> $request->lastname,
                'email'=> $request->email,
                'username'=> $request->username,
                'password' =>Hash::make($request->password),
            ]);
            if($user){
                $student = new Student();
                $student->user_id = $user->id;
                $student->course_id = $request->course;
                $student->id_number = $request->idnumber;
                $student->phone = $request->phone;
                $student->address = $request->address;
                $filename = '';
                if($request->hasFile('photo')){


                    $file = $request->file('photo');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/student/', $filename);
                    $student->photo = 'uploads/student/'.$filename;
                }
                $student->save();
                $response = Student::find($student->id);
               // $return = $request->all();
               // $photo = array( 'photo' => 'uploads/student'.$filename);
               // $return = array_merge($return,$photo);
                return response()->json([
                       'status' => 200,
                       'response' =>  $response,
                ]);
             }
         }

    }

    public function update(Request $request, $id){

        $validator = Validator::make($request->all(),[
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
            'idnumber' => 'required|max:191',
            'phone' => 'required|min:10|max:11',
            'username' => 'required|unique:users,username,'.$id,
            'email' => 'required|email|unique:users,email,'.$id,
           // 'course' => 'required',
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
            $finduser = Student::where('user_id',$user->id)->first();
            $student = Student::find($finduser->id);
            if($student){
                 $student->phone = $request->phone;
                 $student->course_id = $request->course;
                 $student->id_number = $request->idnumber;
                 $student->phone = $request->phone;
                 $student->address = $request->address;
                if($request->hasFile('photo')){

                // //if want to delete file directory if updated
                //     $path = $staff->photo;
                //     if(File::exists($path)){
                //         File::delete($path);
                //     }

                    $file = $request->file('photo');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/staff/', $filename);
                    $student->photo = 'uploads/staff/'.$filename;
                }
                $student->update();
                $getstudent = Student::find($finduser->id);
                return response()->json([
                    'status' => 200,
                    'response' => $getstudent,
                    ]);
                }


        }
   }



   public function destroy($id){

    $user = User::find($id);
    if($user){
        $user->delete();
        $findstudent = Student::where('user_id',$user->id)->first();
        $student = Student::find($findstudent->id);
        //delete also the photo in folder directory
        $path = $student->photo;
        if(File::exists($path)){
          File::delete($path);
         }
        $student->delete();
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


public function uploadcsv(Request $request){

    $validator = Validator::make($request->all(),[
        'students_csv' => 'required|mimes:csv',
    ]
    );

    if($validator->fails()){
        return response()->json([
                    'status' => 404,
                    'errors' => 'Not Csv Format!'
                ]);
    }
    if($request->hasFile('students_csv')){

    Excel::import(new ImportStudent, $request->file('students_csv')); //->store('files')
        //     $file = $request->file('students_csv');
        //     $extension = $file->getClientOriginalExtension();
        //     $filename = time().'.'.$extension;
        //     $file->move('uploads/student/', $filename);
        //    // $student->photo = 'uploads/staff/'.$filename;
           return response()->json([
            'status' => 200,
            'data' => 'Suceess'
        ]);

        }

   // $all =  $request->file('students_csv')->store('files');
  // $import =  Excel::import(new ImportStudent, $request->file('students_csv')->store('files'));
//    if($import ){
//
//    } else{
//     return response()->json([
//         'status' => 404,
//         'errors' => [
//            'message' => 'Error to Import CSV!']
//     ]);
//    }

    // $file = $request->file('students_csv')->store('import');

    // $import = new ImportStudent($file);

    // if($import->failures()->isNotEmpty()){
    //     return response()->json([
    //                 'status' => 404,
    //                 'errors' => [
    //                    'message' => 'Error to Import CSV!'.$import->failures()]
    //             ]);
    // }



}














}
