const Route = require('../lib/models/Route');

describe('Plant model', () => {
  it('has a required name', () => {
    const route = new Route({});
    expect(route.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('has required crag', () => {
    const route = new Route({});
    expect(route.validateSync().errors.crag.message)
      .toEqual('Cast to Number failed for value \"bologne\" at path \"water\"');
  });
  it('grade has required number type', () => {
    const route = new Route({
      grade: 'v-hard'
    });
    expect(route.validateSync().errors.light.message)
      .toEqual('Cast to String failed for value \"{}\" at path \"light\"');
  });
  it('has route number at or above 5.5', () => {
    const route = new Route({
      grade: 5.0
    });
    console.log(route.validateSync());
    expect(route.validateSync().errors.pH.message)
      .toEqual('Path `pH` (-1) is less than minimum allowed value (0).'); 
  });
  it('has route below 5.16', () => {
    const route = new Route({
      grade: 5.17
    });
    expect(route.validateSync().errors.pH.message)
      .toEqual('Path `pH` (15) is more than maximum allowed value (14).'); 
  });
});
