const BumbleProfile = require('../lib/models/bumbleProfile');

describe('Bumble profile model', () => {
  it('has a required name', () => {
    const bumbleProfile = new BumbleProfile({});
    expect(bumbleProfile.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('has required age', () => {
    const bumbleProfile = new BumbleProfile({});
    expect(bumbleProfile.validateSync().errors.age.message)
      .toEqual('Path `crag` is required.');
  });
  it('age is above minimum of 18', () => {
    const bumbleProfile = new BumbleProfile({
      age: 16
    });
    expect(bumbleProfile.validateSync().errors.age.message)
      .toEqual('Cast to Number failed for value \"v-hard\" at path \"grade\"');
  });
  it('has type fishPhoto as a boolean', () => {
    const bumbleProfile = new BumbleProfile({
      sledPhoto: 'BRAAAAAAAAP'
    });
    expect(bumbleProfile.validateSync().errors.sledPhoto.message)
      .toEqual('Path `grade` (5) is less than minimum allowed value (5.5).'); 
  });
  it('has type gunPhoto as a boolean', () => {
    const bumbleProfile = new BumbleProfile({
      gunPhoto: 'I love guns'
    });
    expect(bumbleProfile.validateSync().errors.gunPhoto.message)
      .toEqual('Path `grade` (5.17) is less than minimum allowed value (5.5).'); 
  });
});
