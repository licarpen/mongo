const Snow = require('../lib/models/snow');

describe('Snow model', () => {
  it('has a required depth', () => {
    const snow = new Snow({});
    expect(snow.validateSync().errors.depth.message)
      .toEqual('Path `depth` is required.');
  });
  it('depth is numeric', () => {
    const snow = new Snow({
      depth: 'so deep, brah'
    });
    expect(snow.validateSync().errors.depth.message)
      .toEqual('Cast to Number failed for value \"so deep, brah\" at path \"depth\"');
  });
  it('has required moistureContent', () => {
    const snow = new Snow({
      grade: 'v-hard'
    });
    expect(snow.validateSync().errors.moistureContent.message)
      .toEqual('Cast to Number failed for value \"v-hard\" at path \"grade\"');
  });
  it('moisture content is at or above 0', () => {
    const snow = new Snow({
      moistureContent: -3
    });
    expect(snow.validateSync().errors.grade.message)
      .toEqual('Path `grade` (5) is less than minimum allowed value (5.5).'); 
  });
  it('moisture content is not above 100', () => {
    const snow = new Snow({
      moistureContent: 1000
    });
    expect(snow.validateSync().errors.grade.message)
      .toEqual('Path `grade` (5.17) is less than minimum allowed value (5.5).'); 
  });
  it('faceted is type boolean', () => {
    const snow = new Snow({
      faceted: 'Yes! You gonna die if you hike Glory Bowl today!'
    });
    expect(snow.validateSync().errors.faceted.message)
      .toEqual('Path `grade` (5.17) is less than minimum allowed value (5.5).'); 
  });
});