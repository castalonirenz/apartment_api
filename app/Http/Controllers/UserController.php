<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;

class UserController extends Controller
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
    public function create(Request $request)
    {
        //creates new user
        $mytime = now();

        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'name' => 'required',
            'password' => 'required|min:10',
            'role_id' => 'required'
        ]);

        if($validator-> passes()){
             DB::table('users')
                ->insert(
                    ['email' => $request->input('email'),
                      'name' => $request->input('name'),
                      'password' => Hash::make($request->input('password')),
                      'role' => $request->input('role_id'),
                      'remember_token' => Str::random(60),
                      'created_at' => $mytime,
                      'updated_at' => $mytime
                    ]
                );



              return response()->json([
              'message' => 'Successfully created new user'
        ], 200);
        }else{

        return response()->json($validator->errors(), 422);

    }

    
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
        'email' => 'required|email',
        'password' => 'required',
    ]);
    if ($validator->passes()) {

        //ur code here

        return response()->json([
            'message' => 'your success message or anything'
        ], 200);

    }else{

        return response()->json($validator->errors(), 422);

    }
        
        

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
        'role' => 'required',
    ]);

        if($validator->passes()){
           $data = DB::table('users')
                ->get();
              
          return response()->json([
            'message' => 'Successfully getting all user',
            'data' => $data
        ], 200);

        }
        else{

        return response()->json($validator->errors(), 422);

    }


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
