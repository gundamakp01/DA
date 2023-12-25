<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Repositories\CategoryRepository;
use App\Repositories\ImageRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public $categoryRepository;
    public $imageRepository;

    public function __construct(CategoryRepository $categoryRepository, ImageRepository $imageRepository) {
        $this->categoryRepository = $categoryRepository;
        $this->imageRepository = $imageRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = $this->categoryRepository->getAllParent();
        return $this->responseOk(CategoryResource::collection($categories));
    }

    public function getCategoryByParentId(int $parentId)
    {
        $categories = $this->categoryRepository->getCategoryByParentId($parentId);
        return $this->responseOk(CategoryResource::collection($categories));
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $category = $this->categoryRepository->create($request->only('name', 'parent_id'));
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/uploads/images');
            $category->image()->create([
                'url' => $path,
                'name' => $request->file('image')->getClientOriginalName(),
                'imageable_id' => $category->id
            ]);
        }
        return $category;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = $this->categoryRepository->find($id);
        return $this->responseOk(new CategoryResource($category));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = $this->categoryRepository->findOrFail($id);
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/uploads/images');
            $category->image()->update(
                [
                    'url' => $path,
                    'name' => $request->file('image')->getClientOriginalName(),
                    'imageable_id' => $id
                ]);
        }
        return $this->categoryRepository->update($request->only('name', 'parent_id'), $category->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->categoryRepository->delete($id);
    }
}
