<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Apartment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
            Schema::create('apartment', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('apartment_name');
                $table->string('apartment_details');
                $table->string("apartment_type");
                $table->string("storey");
                $table->string('status')->nullable();
                $table->string("location");
                $table->integer('number_of_rooms');
                $table->string("owner");
                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
