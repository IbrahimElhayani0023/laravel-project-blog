<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Category::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $category =  $request->validate([
            'name'=>['required','string','min:3'],
            'discription'=>['required','string','min:8'],
        ]);
       return Category::create($category);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::findOrFail($id);
        return $category;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $n_category =  $request->validate([
            'name'=>['required','string','min:3'],
            'discription'=>['required','string','min:8'],
        ]);
        $category = Category::findOrFail($id);
        $res = $category->update($n_category);
        return response()->json(['message'=>'update data category successfuly']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
         $category->delete();
        return response()->json(['message'=>'the category is deleted']);
    }
}
