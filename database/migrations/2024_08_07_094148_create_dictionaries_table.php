<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dictionaries', function (Blueprint $table) {
            $table->id();
            $table->string('word')->unique();
            $table->string('slug');
            $table->string('pronunciation');
            $table->string('meaning');
            $table->string('page_number');
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('edit_author_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dictionaries');
    }
};
