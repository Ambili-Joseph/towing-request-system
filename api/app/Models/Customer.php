<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'Customer';
    protected $primaryKey = 'id';
    protected $fillable = [ 'name', 'location','note' ];
    public $timestamps = false;
}