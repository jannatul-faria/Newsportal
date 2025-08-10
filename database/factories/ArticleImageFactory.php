<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ArticleImage>
 */
class ArticleImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         // Use storage_path() for proper path resolution
         $uploadPath = storage_path('app/public/uploads');
        
         // Ensure directory exists with proper permissions
         if (!File::exists($uploadPath)) {
             File::makeDirectory($uploadPath, 0755, true);
         }
 
         // Generate a unique filename
         $filename = uniqid().'.jpg';
         
         // Create a blank image resource
         $image = imagecreatetruecolor(640, 480);
         $backgroundColor = imagecolorallocate($image, rand(100, 255), rand(100, 255), rand(100, 255));
         imagefill($image, 0, 0, $backgroundColor);
         
         // Save the image directly
         imagejpeg($image, $uploadPath.'/'.$filename);
         imagedestroy($image);
 
         return [
             'image_path' => 'uploads/'.$filename,
         ];
    }
}
