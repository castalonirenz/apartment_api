<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
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
            'room_number' => 'required|unique:rooms',
            'room_details' => 'required',
            'rent_price' => 'required',
            'apartment_id' => 'required|exists:apartment,id',
            'image' => 'required|image',
            'domain' => 'required'
        ]);

        if($validator->passes()){

            
            
        
              $file = $request->file('image');

                                $fileNameExt = $request->file('image')->getClientOriginalName();
                                $fileExt = $request->file('image')->getClientOriginalExtension();
                                $fileSize = $request->file('image')->getSize();
                                $fileNameToStore = time().'.'.$fileExt;

                                $file->move(public_path() . '/images/', $fileNameToStore);

                                $url = Storage::url($fileNameToStore);

                            
                        $getID =  DB::table('rooms')
                                    ->insertGetId([
                                            "room_number" => $request->input('room_number'),
                                            "room_details" => $request->input('room_details'),
                                            "rent_price" => $request->input('rent_price'),
                                            'apartment_number' => $request->input('apartment_id'),
                                            'available' => true,
                                            'created_at' => now(),
                                            'updated_at' => now()
                                        ]);

                        
                                DB::table('rooms_images')
                                    ->insert([
                                        "domain" => $request->input('domain'),
                                        "filename" => $fileNameToStore,
                                        'extension' => $fileNameExt,
                                        "size" => $fileSize,
                                        "ref_id" => $getID,
                                        "primary" => true
                                    ]);

                     
                                 $rooms = DB::table('rooms')
                                          ->get();
                    

                                    return response()->json([
                                            'message' => 'Successfully created new room',
                                            // 'rooms' => $rooms
                                    ], 200);
                            
                            
                        

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

        //custom error message
   

        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required|exists:apartment,id',

        ]);

        if($validator->passes()){

            $room_list = DB::table('rooms')
                        ->where('apartment_number', $request->input('apartment_id'))
                        ->join('rooms_images', 'rooms.id', "=", "rooms_images.ref_id")
                        ->get();

             
                    
                    return response()->json([
                        'message' => "Successful",
                        'data'=> $room_list
                    ], 200);
                
        }
        else{
            return response()->json($validator->errors(), 422);
        }
    }

     public function showAll(Request $request)
    {
        //

        //custom error message
   

        $validator = Validator::make($request->all(), [
            // 'apartment_id' => 'required|exists:apartment,id',

        ]);

        if($validator->passes()){

            $room_list = DB::table('rooms')
                        ->join('rooms_images', 'rooms.id', "=", "rooms_images.ref_id")
                        ->get();

                    foreach($room_list as $a){
                         $a->apartment = DB::table('apartment')
                         ->where("id", $a->apartment_number)
                         ->get();
                     }

             
                    
                    return response()->json([
                        'message'=> "Successful",
                        'data'=> $room_list
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
