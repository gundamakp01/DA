<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogCollection;
use App\Http\Resources\BlogResource;
use App\Http\Resources\UserCollection;
use App\Models\Blog;
use App\Repositories\BlogRepository;
use App\Repositories\ImageRepository;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public $blogRepository;
    public $imageRepository;

    public function __construct(BlogRepository $blogRepository, ImageRepository $imageRepository) {
        $this->blogRepository = $blogRepository;
        $this->imageRepository = $imageRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->responseOk(BlogResource::collection($this->blogRepository->all()));
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
    public function store(Request $request)
    {
        $blog = $this->blogRepository->create($request->only('name', 'description', 'content'));
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/uploads/images');
            $blog->image()->create([
                'url' => $path,
                'name' => $request->file('image')->getClientOriginalName(),
                'imageable_id' => $blog->id
            ]);
        }
        return $blog;
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
       return $this->responseSuccess(new BlogResource($this->blogRepository->findOrFail($blog->id)));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/uploads/images');
            $blog->image()->update(
                [
                    'url' => $path,
                    'name' => $request->file('image')->getClientOriginalName(),
                    'imageable_id' => $blog->id
                ]);
        }
        return $this->blogRepository->update($request->only('name', 'description', 'content'), $blog->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        return $this->blogRepository->delete($blog->id);
    }
}
