var todaysWeather = {
    date: new Date(),
    weather: 'rain'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date + 'WEATHER IS -> ' + weather);
};
logWeather(todaysWeather);
