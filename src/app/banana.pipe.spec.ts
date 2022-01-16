import { BananaPipe } from './banana.pipe';

describe('BananaPipe', () => {
  it('create an instance', () => {
    const pipe = new BananaPipe();
    expect(pipe).toBeTruthy();
  });
});
