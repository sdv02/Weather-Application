<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

Route::prefix('api')->group(function () {
    Route::post('/weather', [WeatherController::class, 'getWeather']);
});
Route::prefix('api')->group(function () {
    Route::get('/weather', [WeatherController::class, 'getWeather']);
});






