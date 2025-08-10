<?php

namespace App\Http\Controllers\Frontend;
use App\Models\Comment;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(StoreCommentRequest $request)
    // {
    //     //
    // }
    public function store(Request $request, $id)
    {
        // $request->validate([
        //     'comment_text' => 'required|string|max:1000'
        // ]);

        // Comment::create([
        //     'article_id'   => $id,
        //     // 'user_id'      => auth()->id(),
        //     // 'comment_text' => $request->comment_text,
        //     'status'       => 'pending'
        // ]);

        // return back()->with('message', 'Comment submitted and awaiting approval.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
