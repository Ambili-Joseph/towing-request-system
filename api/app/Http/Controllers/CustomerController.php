<?php

namespace App\Http\Controllers;

use App\Models\Customer;

class CustomerController {

    public function index()
    {
        return Customer::get();
    }

    public function show($id)
    {
        return Customer::find($id);
    }

    public function store()
    {
        return Customer::create([
            'name' => request()->input('name'),
            'location' => request()->input('location'),
            'note' => request()->input('note')
           
        ]);
    }

    public function update($id)
    {
        return tap(Customer::find($id))->update([
            'name' => request()->input('name'),
            'location' => request()->input('location'),
            'note' => request()->input('note')
        ]);
    }

    public function destroy($id)
    {
        Customer::find($id)->delete();
    }
}