# Weather Forecast Service

This service provides an API to access weather data history and additionally gives a method for forecasting a 7-day period. Also there is a UI provided for the forecasting functionality of the application.

## Database
The service does not use a database, rather internal memory in JSON format.

## Heroku
This service is deployed on heroku at `https://weathertom.herokuapp.com/`

## Docker

The Docker image is hosted on Docker Hub at `https://hub.docker.com/r/tomtran43/weather-forecast/`

Use the following docker command to grab the image

```bash
$ docker pull tomtran43/weather-forecast
```

Once you have grabbed the image you can run the image with the following command

```bash
$ docker run -d -p 8081:80 tomtran43/weather-forecast
```

## Running Locally

**Node.js**

Make sure you have Node.js installed on your machine. This code targets version `9.9.0`.

**Install Dependencies**

After cloning this repo, navigate into the root folder where the `package.json` file resides. Run the `npm install` command. This will download the packages needed for the servie to run. You should see a `node_modules` folder created by running the command.

**Start the app**

Use the `npm start` command to run the server. Once you have done this the server will log the port being used. e.g. `8081`. Navigate to `localhost:8081` on your web browser and you should see the UI pop up. If you want to see the API in action, try the following urls:

- `GET` /historical
- `GET` /historical/:date
- `POST` /historical
- `DELETE` /historical/:date
- `GET` /forecast/:date
