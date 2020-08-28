let todaysWeather = {
  date: new Date(),
  weather: 'rain',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date + ' WEATHER IS -> ' + weather);
};
logWeather(todaysWeather);

/////////////////////////////////////
let person = {
  name: 'Hania',
  age: 20,
  coords: {
    lat: 20,
    lng: 0,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = person;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
