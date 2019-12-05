const Plant = require('../lib/models/Plant');

describe('Plant model', () => {
  it('has a required name', () => {
    const plant = new Plant({});
    expect(color.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('water has required number type', () => {
    const plant = new Plant({
      name: 'Snake',
      water: 'bologne'
    });
    expect(plant.validateSync().errors.red.message)
      .toEqual('Cast to Number failed for value \"bologne\" at path \"red\"');
  });
  it('light has required string type', () => {
    const plant = new Plant({
      name: 'Snake',
      water: 2,
      light: {}
    });
    expect(plant.validateSync().errors.light.message)
      .toEqual('Cast to Number failed for value \"bologne\" at path \"red\"');
  });
  it('has a required pH value at or above 0', () => {
    const plant = new Plant({
      name: 'red',
      pH: -1
    });
    expect(plant.validateSync().errors.red.message)
      .toEqual('Path `red` (-1) is less than minimum allowed value (0).'); 
  });
  it('has a required pH value below 14', () => {
    const plant = new Plant({
      name: 'red',
      pH: 15
    });
    expect(color.validateSync().errors.red.message)
      .toEqual('Path `red` (256) is more than maximum allowed value (255).'); 
  });
});
