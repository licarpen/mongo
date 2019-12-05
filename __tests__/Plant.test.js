const Plant = require('../lib/models/Plant');

describe('Plant model', () => {
  it('has a required name', () => {
    const plant = new Plant({});
    expect(plant.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('water has required number type', () => {
    const plant = new Plant({
      water: 'bologne'
    });
    expect(plant.validateSync().errors.water.message)
      .toEqual('Cast to Number failed for value \"bologne\" at path \"water\"');
  });
  it('light has required string type', () => {
    const plant = new Plant({
      light: {}
    });
    expect(plant.validateSync().errors.light.message)
      .toEqual('Cast to String failed for value \"{}\" at path \"light\"');
  });
  it('has a required pH value at or above 0', () => {
    const plant = new Plant({
      pH: -1
    });
    expect(plant.validateSync().errors.pH.message)
      .toEqual('Path `pH` (-1) is less than minimum allowed value (0).'); 
  });
  it('has a required pH value below 14', () => {
    const plant = new Plant({
      pH: 15
    });
    expect(plant.validateSync().errors.pH.message)
      .toEqual('Path `pH` (15) is more than maximum allowed value (14).'); 
  });
});
