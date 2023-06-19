# Weather-Application
The following project is implemented with React.js frontend and Laravel backend.
The Openweathermap api is used as the external api to fetch weather data and Http reuests are sent from the Laravel backend to this api.
The following is required to run the project:
+ Clone the repository
+ Create an account in https://openweathermap.org/api and get your api key. Replace this with the **$apikey** in the weather-api\app\Http\Controllers\WeatherController.php file.
 
+ Assuming Laravel and React requirements are met with the system, run the project as follows
+ In the terminal nagivate to weather-api/ and run the command 
  ```
  php artisan serve
  ```
+ In a new terminal nagivate to frontend/ and run the command 
  ```
  npm start
  ```
+ To view the project locally on localhost:3000
+ Make sure to be running the laravel backned to obtain data.
  
