<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'article_id' => Article::inRandomOrder()->first()->id ?? Article::factory(),
            'user_id' => User::inRandomOrder()->first()->id ?? null,
            'parent_id' => null,
            'comment_text' => $this->faker->sentence(),
            'status' => 'approved',
        ];
    }
}
