<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::create(['name' => 'Đầm']);
        Category::create(['name' => 'Áo']);
        Category::create(['name' => 'Chân váy']);
        Category::create(['name' => 'Quần']);
        Category::create(['name' => 'Jumpsuit']);
        Category::create(['name' => 'Homewear']);
        Category::create(['name' => 'Unique Collection']);
        Category::create(['name' => 'Phụ kiện']);
        Category::create(['name' => 'Đầm hai dây', 'parent_id' => 1]);
        Category::create(['name' => 'Đầm maxi', 'parent_id' => 1]);
        Category::create(['name' => 'Đầm sát nách', 'parent_id' => 1]);
        Category::create(['name' => 'Đầm tay dài', 'parent_id' => 1]);
        Category::create(['name' => 'Đầm tay lỡ', 'parent_id' => 1]);
        Category::create(['name' => 'Đầm tay ngắn', 'parent_id' => 1]);
        Category::create(['name' => 'Đầm trễ vai', 'parent_id' => 1]);
        Category::create(['name' => 'Áo sơ mi', 'parent_id' => 2]);
        Category::create(['name' => 'Áo dài', 'parent_id' => 2]);
        Category::create(['name' => 'Áo kiểu', 'parent_id' => 2]);
        Category::create(['name' => 'Áo khoác', 'parent_id' => 2]);
        Category::create(['name' => 'Áo len', 'parent_id' => 2]);
        Category::create(['name' => 'T-shirt', 'parent_id' => 2]);
        Category::create(['name' => 'Chân váy Maxi', 'parent_id' => 3]);
        Category::create(['name' => 'Chân váy Midi', 'parent_id' => 3]);
        Category::create(['name' => 'Chân váy Mini', 'parent_id' => 3]);
        Category::create(['name' => 'Váy trong bộ Vest-Váy', 'parent_id' => 3]);
        Category::create(['name' => 'Quần dài', 'parent_id' => 4]);
        Category::create(['name' => 'Quần lửng', 'parent_id' => 4]);
        Category::create(['name' => 'Quần short', 'parent_id' => 4]);
        Category::create(['name' => 'Quần trong bộ Vest-Quần', 'parent_id' => 4]);
        Category::create(['name' => 'Đầm', 'parent_id' => 5]);
        Category::create(['name' => 'Áo', 'parent_id' => 5]);
        Category::create(['name' => 'Chân váy', 'parent_id' => 5]);
        Category::create(['name' => 'Quần', 'parent_id' => 5]);
        Category::create(['name' => 'Jumpsuit', 'parent_id' => 5]);
        Category::create(['name' => 'Homewear', 'parent_id' => 5]);
        Category::create(['name' => 'Jumpsuit', 'parent_id' => 5]);
        Category::create(['name' => 'Unique Collection', 'parent_id' => 5]);
        Category::create(['name' => 'Phụ kiện', 'parent_id' => 5]);
        Category::create(['name' => 'Đầm', 'parent_id' => 6]);
        Category::create(['name' => 'Áo', 'parent_id' => 6]);
        Category::create(['name' => 'Chân váy', 'parent_id' => 6]);
        Category::create(['name' => 'Quần', 'parent_id' => 6]);
        Category::create(['name' => 'Jumpsuit', 'parent_id' => 6]);
        Category::create(['name' => 'Homewear', 'parent_id' => 6]);
        Category::create(['name' => 'Jumpsuit', 'parent_id' => 6]);
        Category::create(['name' => 'Unique Collection', 'parent_id' => 6]);
        Category::create(['name' => 'Phụ kiện', 'parent_id' => 6]);
        Category::create(['name' => 'Đầm', 'parent_id' => 7]);
        Category::create(['name' => 'Áo', 'parent_id' => 7]);
        Category::create(['name' => 'Chân váy', 'parent_id' => 7]);
        Category::create(['name' => 'Quần', 'parent_id' => 7]);
        Category::create(['name' => 'Jumpsuit', 'parent_id' => 7]);
        Category::create(['name' => 'Homewear', 'parent_id' => 7]);
        Category::create(['name' => 'Jumpsuit', 'parent_id' => 7]);
        Category::create(['name' => 'Unique Collection', 'parent_id' => 7]);
        Category::create(['name' => 'Phụ kiện', 'parent_id' => 7]);
        Category::create(['name' => 'Túi xách', 'parent_id' => 8]);
        Category::create(['name' => 'Cài áo', 'parent_id' => 8]);
    }
}
