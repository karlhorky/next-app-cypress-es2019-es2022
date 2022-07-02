describe('Optional chaining', () => {
  it('passes', () => {
    let something = Object.freeze([1, 2, 3, 4, 5]) as
      | readonly number[]
      | undefined;
    expect(something?.at(0)).to.equal(1);
    expect(something?.length).to.equal(5);
  });
});
