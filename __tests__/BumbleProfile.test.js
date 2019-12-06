const BumbleProfile = require('../lib/models/BumbleProfile');

describe('Bumble profile model', () => {
  it('has a required name', () => {
    const bumbleProfile = new BumbleProfile({});
    expect(bumbleProfile.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('has required age', () => {
    const bumbleProfile = new BumbleProfile({});
    expect(bumbleProfile.validateSync().errors.age.message)
      .toEqual('Path `age` is required.');
  });
  it('age is above minimum of 18', () => {
    const bumbleProfile = new BumbleProfile({
      age: 16
    });
    expect(bumbleProfile.validateSync().errors.age.message)
      .toEqual('Path `age` (16) is less than minimum allowed value (18).');
  });
  it('has type fishPhoto as a boolean', () => {
    const bumbleProfile = new BumbleProfile({
      sledPhoto: 'BRAAAAAAAAP'
    });
    expect(bumbleProfile.validateSync().errors.sledPhoto.message)
      .toEqual('Cast to Boolean failed for value \"BRAAAAAAAAP\" at path \"sledPhoto\"'); 
  });
  it('has type gunPhoto as a boolean', () => {
    const bumbleProfile = new BumbleProfile({
      gunPhoto: 'AR154EVA@me.com'
    });
    expect(bumbleProfile.validateSync().errors.gunPhoto.message)
      .toEqual('Cast to Boolean failed for value \"AR154EVA@me.com\" at path \"gunPhoto\"'); 
  });
});
