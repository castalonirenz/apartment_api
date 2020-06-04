<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
class ApartmentController extends Controller
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
            'apartment_type' =>  'required',
            'apartment_name' => 'required|unique:apartment',
            'apartment_details' => 'required',
            'storey' => 'required',
            'location' => 'required',
            'number_of_rooms' => 'required',
            'owner' => 'required',
            'image.*' => 'required|image',
            'domain' => 'required'
        ]);

        if($validator->passes()){
                 if( $request->hasFile('image')){

                                   $query = DB::table('apartment')
                                    ->insertGetId([
                                        'apartment_type' => $request->input('apartment_type'),
                                        'apartment_name' => $request->input('apartment_name'),
                                        'storey' => $request->input('storey'),
                                        'status' => 'created',
                                        'apartment_details' => $request->input('apartment_details'),
                                        'location' => $request->input('location'),
                                        'number_of_rooms' => $request->input('number_of_rooms'),
                                        'owner' => $request->input('owner')
                                    ]);

                             foreach($request->file('image') as $image){
                                $file = $image;

                                $fileNameExt = $file->getClientOriginalName();
                                $fileExt = $file->getClientOriginalExtension();
                                $fileSize = $file->getSize();
                                $fileNameToStore = Str::random().time().'.'.$fileExt;
                                $file->move(public_path() . '/images/', $fileNameToStore);

                                $url = Storage::url($fileNameToStore);

                                DB::table('apartment_image')
                                    ->insert([
                                        "domain" => $request->input('domain'),
                                        "filename" => $fileNameToStore,
                                        'extension' => $fileNameExt,
                                        "size" => $fileSize,
                                        "ref_id" => $query,
                                        "primary" => true
                                    ]);
                                    
                             }

                            return response()->json([
                                    "Message" =>"Successfully created new apartment",
                                    "data" => $url
                                ]);

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
            "role" => "required"
        ]);

        if($validator->passes()){

                $apartments = DB::table('apartment')
                    // ->join('apartment_image', 'apartment.id', "=", "apartment_image.ref_id")
                     ->get();

                     //get all image associate with this apartment
                     foreach($apartments as $a){
                         $a->images = DB::table('apartment_image')
                         ->where("apartment_image.ref_id", $a->id)
                         ->get();
                     }

                     //get number of available room
                    foreach($apartments as $a) {
                            $a->available = DB::table('rooms')
                            ->where('available', true)
                            ->where('apartment_number', $a->id)
                            ->count();
                }

                    //get all room details
                    foreach($apartments as $a) {
                            $a->rooms = DB::table('rooms')
                            ->where('available', true)
                            ->where('apartment_number', $a->id)
                            ->get();
                }

             

                return response()->json([
                    'message' => 'retrieve successful',
                    'apartments' => $apartments,
                ]);
        


            

            
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
    public function update(Request $request)
    {
        //

        $validator = Validator::make($request->all(), [
            "role" => "required",
            "apartment_id" => 'required|exists:apartment,id',
            'apartment_name' => 'required',
            'apartment_details' => 'required',
            'apartment_type'=> 'required',
            'storey' => 'required',
            'location' => 'required',
            'number_of_rooms' => 'required',
            'owner' => 'required'
        ]);

        if($validator->passes()){

            $data = DB::table('apartment')
                    ->where('id', $request->input('apartment_id'))
                    ->update([
                        'apartment_name' => $request->input('apartment_name'),
                        'apartment_details' => $request->input('apartment_details'),
                        'apartment_type' => $request->input('apartment_type'),
                        'storey' => $request->input('storey'),
                        'location' => $request->input('location'),
                        'number_of_rooms' => $request->input('number_of_rooms'),
                        'owner' => $request->input('owner')
                    ]);

            return response()->json([
                'message'=> "Update successful",
                'data' => $request->all()
            ]);
        }
        else{

            return response()->json(
                $validator->errors(), 422
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //

        $validator = Validator::make($request->all(), [
            'role' => 'required',
            'apartment_id' => 'required|exists:apartment,id',
        ]);

        if($validator->passes()){
            DB::table('apartment')
            ->where('id', $request->input('apartment_id'))
            ->delete();

            return response()->json([
                'message' => "deleted succesfully",
            ]);


        }
        else{
            return response()->json($validator->errors(), 422);
        }
    }
}
