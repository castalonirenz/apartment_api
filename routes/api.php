<?php

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

Route::group(['prefix' => 'v1'], function () {
    Route::post('user/create', ['uses' => 'UserController@create']);
   Route::get('user/getAll', ['uses' => 'UserController@show'])->middleware('role');
   Route::get('user/auth', ['uses' => 'Auth@Login']);
    // Route::resource('user', 'UserController');
    // Route::post('users/{id}', function ($id) {
        
    // });
});

