describe('Optional chaining', () => {
  it('passes', () => {
    let something = [1, 2, 3, 4, 5] as number[] | undefined;
    expect(something?.at(0)).to.equal(1);
    expect(something?.length).to.equal(5);
  });
});
