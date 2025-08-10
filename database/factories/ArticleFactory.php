<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence();
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => $this->faker->sentence(1),
            'content' => $this->faker->paragraphs(5, true),
            'category_id' => Category::inRandomOrder()->first()->id ?? Category::factory(),
            'user_id' => User::inRandomOrder()->first()->id ?? User::factory(),
            'status' => 'published',
            'is_featured' => $this->faker->boolean(),
            'published_at' => now(),
            'views_count' => $this->faker->numberBetween(10, 500),
            'likes_count' => $this->faker->numberBetween(0, 50),
            'dislikes_count' => $this->faker->numberBetween(0, 10),
        ];
    }
}
