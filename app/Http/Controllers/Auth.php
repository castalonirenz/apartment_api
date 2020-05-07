<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class Auth extends Controller
{
    //

    public function Login(Request $request){

        //user login

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator-> passes()){

             $user = DB::table('users')
                    ->select()
                    ->where([
                        ['email', $request->input('email')]
                        ])
                    ->first();

                if($user)
                {
                    if(Hash::check($request->input('password'), $user->password))
                    {
                        return response()
                            ->json([
                                'Message' => "Success",
                                'details' =>$user
                            ], 200);
                    }
                    else{
                          return response()
                             ->json([
                                 'Message' => 'Please check your email/password',
                             ], 404);
                    }
                   
                }
                else{
                      return response()
                             ->json([
                                 'Message' => 'Please check your email/password',
                             ], 404);
                }

        }
        else{
            return response()
                ->json($validator->errors(),422);
        }
    }
}
