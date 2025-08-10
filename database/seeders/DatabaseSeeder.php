<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

      
        \App\Models\Role::insert([
            ['name' => 'admin'],
            ['name' => 'editor'],
            ['name' => 'reporter'],
            ['name' => 'subscriber'],
        ]);
    
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'role_id' => 1,
        ]);
    
        \App\Models\Category::factory(5)->create();
        \App\Models\Tag::factory(10)->create();
        \App\Models\Article::factory(20)
            ->hasImages(3)
            ->hasTags(2)
            ->create();
        \App\Models\Comment::factory(30)->create();
    }
}
