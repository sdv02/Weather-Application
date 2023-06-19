<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController 
{
    /**
     * Summary of getWeather
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function getWeather(Request $request)
    {
        $apiKey = '548c82d6fd47270e965638e02207d4ea'; // Replace with your actual API key
        $city =  $request->query('city');
        $unit= $request->query('units');
        //dd($city);
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=$unit");
        //dd($response->json());
        
        
        if ($response->successful()) {
            return $response->json();

        } else {
            return response()->json(['message' => 'Failed to fetch weather data'], 500);
        }
    }
}
