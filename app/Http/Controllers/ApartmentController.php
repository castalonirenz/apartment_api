<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
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
            'image' => 'required|image'
        ]);

        if($validator->passes()){
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


                 if($request->hasFile('image')){


                                $fileNameExt = $request->file('image')->getClientOriginalName();
                                $fileExt = $request->file('image')->getClientOriginalExtension();
                                $fileSize = $request->file('image')->getSize();
                                $fileNameToStore = time().'.'.$fileExt;

                                   Storage::putFileAs('public/images', $request->file('image'), $fileNameToStore);
                                $url = Storage::url($fileNameToStore);
                                DB::table('apartment_image')
                                    ->insert([
                                        "domain" => "http://127.0.0.1:8000",
                                        "filename" => $fileNameToStore,
                                        'extension' => $fileNameExt,
                                        "size" => $fileSize,
                                        "ref_id" => $query,
                                        "primary" => true
                                    ]);

                 }


                return response()->json(
                    [
                        "Message" =>"Successfully created new apartment",
                        "data" => $url
                    ]
                    );
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
        //   $aparmentList =  DB::table('apartment')
        //         ->select()
        //         ->get();

        $aparmentList = DB::table('apartment')
            ->leftJoin('apartment_image', 'apartment.id', '=', 'apartment_image.ref_id')
            ->get();




                return response()->json([
                    'message', "retrieve successful",
                    'data', $aparmentList
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
