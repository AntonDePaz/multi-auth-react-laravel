<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Staff extends Model
{
    use HasFactory;

   protected $table = 'staff';

   protected $fillable = [
        // 'firstname',
        // 'lastname',
        // 'email',
        // 'username',
        // 'password',
        'phone',
        'photo',
        'address'
    ];

    protected $with = ['user'];

    public function user(){
        return $this->belongsTo(User::class, 'foreign_id','id');
    }

}
