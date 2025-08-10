<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $featured = Article::with('category', 'user')
            ->where('is_featured', true)
            ->latest()
            ->take(5)
            ->get();

        $latest = Article::with('category', 'user')
            ->latest()
            ->paginate(10);

        return Inertia::render('Home', [
            'featured' => $featured,
            'latest'   => $latest
        ]);
    }
}
