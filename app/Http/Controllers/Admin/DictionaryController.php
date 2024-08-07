<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Dictionary;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Response;
class DictionaryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        $words = Dictionary::query();

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $words = $words->where('word', 'like', '%' . $search . '%');
        }

        $words =  $words->paginate($show ?? 10)->appends($_GET);

        return Inertia::render('Admin/Dictionary/Index', ['words' => $words, 'request' => $_GET]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Dictionary/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'word'          => ['required', 'string', 'max:255', 'unique:' . Dictionary::class],
            'pronunciation' => 'required',
            'meaning'       => 'required',
            'page_number'   => 'required',
        ]);

        $data = [
            'word'           => $request->word,
            'slug'           => Str::slug($request->word),
            'pronunciation'  => $request->pronunciation,
            'meaning'        => $request->meaning,
            'page_number'    => $request->page_number,
            'author_id'      => Auth::user()->id,
            'edit_author_id' => Auth::user()->id,
        ];
        Dictionary::create($data);
        return to_route('dictionary.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $word = Dictionary::with('author')->firstWhere('id', $id);
        // return   $word;
        return Inertia::render('Admin/Dictionary/Show', ['word' => $word]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $dictionary = Dictionary::where('id', $id)->first();
        return Inertia::render('Admin/Dictionary/Edit', ['dictionary' => $dictionary]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'word'          => ['required', 'string', 'max:255', 'unique:' . Dictionary::class],
            'pronunciation' => 'required',
            'meaning'       => 'required',
            'page_number'   => 'required',
        ]);

        $data = [
            'word'           => $request->word,
            'slug'           => Str::slug($request->word),
            'pronunciation'  => $request->pronunciation,
            'meaning'        => $request->meaning,
            'page_number'    => $request->page_number,
            'author_id'      => Auth::user()->id,
            'edit_author_id' => Auth::user()->id,
        ];

        Dictionary::firstwhere('id', $id)->update($data);
        return to_route('dictionary.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Dictionary::where('id', $id)->delete();
        return redirect()->route('dictionary.index');
    }
}
