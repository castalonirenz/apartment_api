<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ApartmentImage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
          Schema::create('apartment_image', function (Blueprint $table) {
            //
                   $table->id();
                   $table->string('domain');
                   $table->string('filename');
                   $table->string('extension');
                   $table->string('size');
                   $table->string('ref_id');
                   $table->string('primary');
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
