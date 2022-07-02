describe('Optional chaining', () => {
  it('passes', () => {
    let something = [1, 2, 3, 4, 5] as number[] | undefined;
    expect(something?.length).to.equal(5);
  });
});
