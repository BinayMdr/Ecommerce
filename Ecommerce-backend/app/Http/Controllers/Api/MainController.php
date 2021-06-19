<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product, App\Order;

class MainController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }
    public function get_details(Request $request)
    {
        $product = Product::find($request['id']);
        return response()->json($product);
    }
    public function checkout(Request $request)
    {
        $order = new Order();
        $order->full_name = $request->data['formData']['Full_name'];
        $order->address = $request->data['formData']['Address'];
        $order->contact_number = $request->data['formData']['Phone_number'];
        $order->delivery_time = now();
        $carts = $request->data['cart'];

        $sub_total = 0 ;
        foreach($carts as $cart)
            {
                $product_json[] = [
                    'product_id' => $cart['id'],
                    'product_name' => $cart['title'],
                    'quantity' => $cart['quantity'],
                    'price' => $cart['price']
                ];

                $sub_total = $sub_total + ($cart['quantity'] * $cart['price']);
            }
        $order->product_items = json_encode($product_json);
        $order->sub_total = $sub_total;
        $order->save();

        return response()->json(['error' => false,'message' => 'Order Placed']);
       
    }
}
