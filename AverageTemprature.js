// Complete the function calculateAverage
const weather = [
    { city: "New York", temperature: 50, pressure: 1015 },
    { city: "Los Angeles", temperature: 70, pressure: 1010 },
    { city: "Chicago", temperature: 40, pressure: 1012 },
    { city: "Houston", temperature: 75, pressure: 1020 },
    { city: "Miami", temperature: 80, pressure: 1017 }
  ];
  const pressureThreshold = 1015;
  function calculateAverage(pressureThreshold){
      const filteredCities = weather.filter((city) => {
  return city.pressure >= pressureThreshold;
});

const temperatures = filteredCities.map((city) => {
  return city.temperature;
});

const totalTemperature = temperatures.reduce((total, temperature) => {
  return total + temperature;
}, 0);

const averageTemperature = totalTemperature / filteredCities.length;

return averageTemperature.toFixed(1);
    //Implement your function here
  }
  console.log(calculateAverage(pressureThreshold))
  //Output : 68.3