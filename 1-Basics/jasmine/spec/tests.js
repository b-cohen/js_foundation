// Jasmine test suite for the Lasagna Cooking Time Calculator assignment

describe('Lasagna Cooking Time Calculator Variables', function() {

  it('should declare EXPECTED_MINUTES_IN_OVEN as a constant and set it to 40', function() {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
  });

  it('should declare actualMinutesInOven with let and assign a numeric value', function() {
    expect(typeof actualMinutesInOven).toBe('number');
  });

  it('should declare numberOfLayers with var and assign a numeric value', function() {
    expect(typeof numberOfLayers).toBe('number');
  });

  it('should calculate remainingMinutesInOven as the difference between expected and actual oven time', function() {
    expect(remainingMinutesInOven).toBe(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
  });

  it('should calculate preparationTimeInMinutes as numberOfLayers multiplied by 2', function() {
    expect(preparationTimeInMinutes).toBe(numberOfLayers * 2);
  });

  it('should calculate totalTimeInMinutes as preparation time plus actual oven time', function() {
    expect(totalTimeInMinutes).toBe(preparationTimeInMinutes + actualMinutesInOven);
  });
});
