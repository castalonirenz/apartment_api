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


    Route::group(['prefix' => 'user'], function () {
    Route::post('create', 'UserController@create');
    Route::get('getAll', 'UserController@show')->middleware('role');
    Route::get('auth', 'Auth@Login');

    //room
    Route::post('create_room', 'RoomController@store')->middleware('role');
    Route::get('room_list', 'RoomController@show')->middleware('role');
    Route::get('room_list_all', 'RoomController@showAll')->middleware('role');

    //apartment
    Route::post("create_apartment", 'ApartmentController@store')->middleware('role');
    Route::get('apartment_list', 'ApartmentController@show')->middleware("role");
    Route::put('update/apartment_details', 'ApartmentController@update')->middleware('role');
    Route::delete('delete/apartment', 'ApartmentController@destroy')->middleware('role');
    });
});

