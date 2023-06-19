# Weather-Application
The following project is implemented with React.js frontend and Laravel backend.
The Openweathermap api is used as the external api to fetch weather data and Http reuests are sent from the Laravel backend to this api.
The application enables users to view weather data of any city and one of the features of the appication is to get teperature in desired format as Celcius or Fahrenheit. The application is responsive and contains dynamic icons changing according to the weather. One additional feature is that the background of the application changes as per the temperature and weather of the city.

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
  <img src="https://github.com/sdv02/Weather-Application/assets/107821357/b03fd234-1067-447f-ab1f-6f64fa7ac54c" width=80% height=50%>
  <img src="https://github.com/sdv02/Weather-Application/assets/107821357/6334b1aa-45d2-4064-90fa-08ad3cddbfca" width=80% height=50%>
  <img src="https://github.com/sdv02/Weather-Application/assets/107821357/ee8618aa-e62f-481b-a095-58ab66a9a6be" width=80% height=50%>
  <img src="https://github.com/sdv02/Weather-Application/assets/107821357/7f905448-e2f2-4f77-8af6-ac52cd1c8d64" width=30% height=70%>

  

