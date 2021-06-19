<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    protected $appends = ['imageSource'];

    public function getImageSourceAttribute()
    {
        return env('APP_URL').\Voyager::image($this->image);
    }
}
