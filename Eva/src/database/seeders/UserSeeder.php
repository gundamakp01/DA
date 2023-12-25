<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'email' => 'user@gmail.com',
            'password' => '123123',
            'name' => 'User',
            'role' => User::ROLE_USER,
            'phone_number' => '0923456789'
        ]);
    }
}
