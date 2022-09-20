import data from '../beersData';

describe('Beers data', () => {
  it.each([
    ['1', 'Pilsner', 4, 6],
    ['2', 'IPA', 5, 6],
    ['3', 'Lager', 4, 7],
    ['4', 'Stout', 6, 8],
    ['5', 'Wheat beer', 3, 5],
    ['6', 'Pale Ale', 4, 6],
  ])(
    'verify beer id %s name %s minimumTemperature %s and maximumTemperature %s',
    (id, beerName, minTemp, maxTemp) => {
      var beer = data.find((d) => d.id === id);

      expect(beer.id).toEqual(id);
      expect(beer.name).toEqual(beerName);
      expect(beer.minimumTemperature).toEqual(minTemp);
      expect(beer.maximumTemperature).toEqual(maxTemp);
    }
  );
});
