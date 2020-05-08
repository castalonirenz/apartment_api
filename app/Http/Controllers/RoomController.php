<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function store(Request $request)
    {
        //

        $validator = Validator::make($request->all(), [
            'room_number' => 'required',
            'room_details' => 'required',
            'rent_price' => 'required',
            'apartment_id' => 'required|exists:apartment,id'
        ]);

        if($validator->passes()){
            
        
                $check_room_exist = DB::table('rooms')
                                    ->where('apartment_number', $request->input("apartment_id"))
                                    ->where('room_number', $request->input("room_number"))
                                    ->get();

                            
                            //check if room exist in specific aparment id
                            if(count($check_room_exist) < 1){
                                    DB::table('rooms')
                                    ->insert(
                                        [
                                            "room_number" => $request->input('room_number'),
                                            "room_details" => $request->input('room_details'),
                                            "rent_price" => $request->input('rent_price'),
                                            'apartment_number' => $request->input('apartment_id'),
                                            'created_at' => now(),
                                            'updated_at' => now()
                                        ]
                                        );

                                    return response()->json([
                                            'message' => 'Successfully created new room'
                                    ], 200);
                            }
                            
                            else{
                                return response()->json([
                                    'message' => 'Room already exist'

                                ], 422);
                            }

        }
        else{
            return response()->json($validator->errors(), 422);
        }

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //

        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required'
        ]);

        if($validator->passes()){
            $room_list = DB::table('rooms')
                        ->where('apartment_number', $request->input('apartment_id'))
                        ->get();
                    
                    return response()->json([
                        'message', "Successful",
                        'data', $room_list
                    ], 200);
                
        }
        else{
            return response()->json($validator->errors(), 422);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
