const getStatus = (temperature, minimumTemperature, maximumTemperature) => {
  if (temperature < minimumTemperature) return 'too low';
  else if (temperature > maximumTemperature) return 'too high';
  else return 'all good';
};

export default getStatus;
