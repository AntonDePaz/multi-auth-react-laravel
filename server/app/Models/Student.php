<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Course;

class Student extends Model
{
    use HasFactory;

   protected $table = 'students';

   protected $fillable = [
    'user_id',
    'course_id',
    'id_number',
    'phone',
    'address',
    'photo',
    ];
    protected $with = ['user', 'course'];
    public function user(){
        return $this->belongsTo(User::class, 'user_id','id');
    }
    public function course(){
        return $this->belongsTo(Course::class, 'course_id','id');
    }

}
