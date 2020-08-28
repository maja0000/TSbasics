var todaysWeather = {
    date: new Date(),
    weather: 'rain'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date + ' WEATHER IS -> ' + weather);
};
logWeather(todaysWeather);
var person = {
    name: 'Hania',
    age: 20,
    coords: {
        lang: '20',
        let: '0'
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = person.age;
