const Color = require('../lib/models/Color');

describe('Color model', () => {
  it('has a required name', () => {
    const color = new Color({});
    expect(color.validateSync().errors.name.message)
      .toEqual('Path `name` is required');
  });
  it('has a required red value below 256', () => {
    const color = new color({
      name: 'red',
      red: -1
    });
    expect(color.validateSync().errors.red.message)
      .toEqual('Has a value less than the min....'); 
  });
});
