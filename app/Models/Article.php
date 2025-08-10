<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Article extends Model
{
    /** @use HasFactory<\Database\Factories\ArticleFactory> */
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'excerpt', 'content',
        'category_id', 'user_id', 'status', 'is_featured',
        'published_at', 'seo_title', 'seo_description',
        'seo_keywords', 'views_count', 'likes_count', 'dislikes_count'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(ArticleImage::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'article_tag');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id');
    }
}
