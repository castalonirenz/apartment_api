<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
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
            'owner' => 'required'
        ]);

        if($validator->passes()){
            DB::table('apartment')
                ->insert([
                    'apartment_type' => $request->input('apartment_type'),
                    'apartment_name' => $request->input('apartment_name'),
                    'storey' => $request->input('storey'),
                    'apartment_details' => $request->input('apartment_details'),
                    'location' => $request->input('location'),
                    'number_of_rooms' => $request->input('number_of_rooms'),
                    'owner' => $request->input('owner')
                ]);

                return response()->json(
                    [
                        "Message", "Successfully created new apartment"
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
          $aparmentList =  DB::table('apartment')
                ->select()
                ->get();

                return response()->json([
                    'message', "retrieved successful",
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
