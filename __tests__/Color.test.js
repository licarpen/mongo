const Color = require('../lib/models/Color');

describe('Color model', () => {
  it('has a required name', () => {
    const color = new Color({});
    expect(color.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('red has required number type', () => {
    const color = new Color({
      name: 'red',
      red: 'bologne'
    });
    expect(color.validateSync().errors.red.message)
      .toEqual('Cast to Number failed for value \"bologne\" at path \"red\"');
  });
  it('has a required red value at or above 0', () => {
    const color = new Color({
      name: 'red',
      red: -1
    });
    expect(color.validateSync().errors.red.message)
      .toEqual('Path `red` (-1) is less than minimum allowed value (0).'); 
  });
  it('has a required red value below 256', () => {
    const color = new Color({
      name: 'red',
      red: 256
    });
    expect(color.validateSync().errors.red.message)
      .toEqual('Path `red` (256) is more than maximum allowed value (255).'); 
  });
});
