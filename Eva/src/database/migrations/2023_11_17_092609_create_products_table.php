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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('code')->nullable();
            $table->unsignedInteger('category_id')->nullable();
            $table->text('description')->nullable();
            $table->unsignedBigInteger('price')->nullable();
            $table->unsignedInteger('size_s')->nullable();
            $table->unsignedInteger('size_m')->nullable();
            $table->unsignedInteger('size_l')->nullable();
            $table->unsignedInteger('size_xl')->nullable();
            $table->boolean('is_new')->nullable();
            $table->unsignedInteger('discount')->nullable();
            $table->string('vendor', 500)->nullable();
            $table->integer('total')->default(0);
            $table->string('material')->nullable();
            $table->string('color')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
