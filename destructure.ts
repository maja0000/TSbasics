let todaysWeather = {
  date: new Date(),
  weather: 'rain',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date + ' WEATHER IS -> ' + weather);
};
logWeather(todaysWeather);

let person = {
  name: 'Hania',
  age: 20,
  coords: {
    lang: '20',
    let: '0',
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = person;
