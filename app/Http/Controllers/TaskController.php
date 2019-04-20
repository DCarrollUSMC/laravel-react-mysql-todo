<?php

namespace App\Http\Controllers;

use App\Task;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    // Restrict to logged-in users only
    public function __construct() {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Task $task
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Task $task){
        // Retrieve all tasks for the current user
        $allTasks = $task->whereIn('user_id', $request->user())->with('user');
        $tasks = $allTasks->orderBy('created_at', 'desc')->take(10)->get();

        // Return a JSON response
        return response()->json([
            'tasks' => $tasks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO: Improve validation
        $validatedData = $request->validate([
            'title' => 'required|max:255'
        ]);
        // Create new task
        $task = $request->user()->tasks()->create([
            'title' => $request->title
        ]);
        // Return JSON task
        return response()->json($task->with('user')->find($task->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Task::findOrFail($id)->delete();
    }
}
