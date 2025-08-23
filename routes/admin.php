<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ArticleController;

Route::get('/articles', [ArticleController::class, 'index'])->name('article.index');