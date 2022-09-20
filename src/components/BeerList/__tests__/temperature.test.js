import getStatus from '../temperature';

describe('verify temperature status', () => {
  const maximumTemperature = 8;
  const minimumTemperature = 5;

  it('temperature is less than minimumTemperature then status is too low', () => {
    expect(getStatus(4, minimumTemperature, maximumTemperature)).toEqual(
      'too low'
    );
  });

  it('temperature is greater than maximumTemperature then status is too high', () => {
    expect(getStatus(9, minimumTemperature, maximumTemperature)).toEqual(
      'too high'
    );
  });

  it('temperature is equal to min Temperature then status is all good', () => {
    expect(
      getStatus(minimumTemperature, minimumTemperature, maximumTemperature)
    ).toEqual('all good');
  });

  it('temperature is equal to max Temperature then status is all good', () => {
    expect(
      getStatus(maximumTemperature, minimumTemperature, maximumTemperature)
    ).toEqual('all good');
  });

  it('temperature is between max and min Temperature then status is all good', () => {
    expect(getStatus(6, minimumTemperature, maximumTemperature)).toEqual(
      'all good'
    );
  });
});
