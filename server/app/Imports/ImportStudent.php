<?php

namespace App\Imports;

use App\Models\User;
use App\Models\Student;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Hash;


//class ImportStudent implements ToModel
//class ImportStudent implements ToCollection
class ImportStudent implements ToCollection, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
  //  public function model(array $row)
  //  {


       // return $row;
     //  foreach ($rows as $row) {
            //     User::create([
            //         'firstname' => $row[0],
            //         'lastname' => $row[1],
            //         'email' => $row[2],
            //         'username' => $row[3],
            //         'role' => 0,
            //         'password' => Hash::make($row[1]),
            //     ]);
            // }
        // return new User([
        //   //  'idnumber' => $row[0],
        //     'firstname' => $row[1],
        //     'lastname' => $row[2],
        //     'email' => $row[3],
        //     'username' => $row[4],
        //   //  'phone' => $row[5],
        //    // 'address' => $row[6],
        //     'password' =>  $row[0],
        // ]);
   // }

    public function collection(Collection $rows)
    {
      // Validator::make($rows->toArray(), [

    // $validator = Validator::make($rows->toArray(),[
    //        // '*.idnumber' => 'required',
    //         '*.firstname' => 'required',
    //         '*.lastname' => 'required',
    //         '*.email' => 'required',
    //         '*.username' => 'required',
    //       //  '*.phone' => 'required',
    //       //  '*.address' => 'required',

    //     // ])->validate();
    //     ]);

    //      if($validator->fails()){
    //         return response()->json([
    //             'status' => 400,
    //             'errors' => $validator->messages(),
    //         ]);
    //     }
        //else{


        //  return response()->json([
        //     'status' => 200,
        //     'data' => $rows[0]
        // ]);
            foreach ($rows as $row) {
                $user = User::create([
                    'firstname' => $row['firstname'],
                    'lastname' => $row['lastname'],
                    'email' => $row['email'],
                    'username' => $row['username'],
                    'role' => 0,
                    'password' => Hash::make($row['lastname']),
                ]);
                if($user){
                    $student = new Student();
                    $student->user_id = $user->id;
                    $student->course_id = 0;
                    $student->id_number = $row['idnumber'];
                    $student->phone =  $row['phone'];
                    $student->address =  $row['address'];
                    $student->save();
                }
            }
     //  }
    }
}
