describe('Players Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show players', async () => {
    await element(by.text('Players')).tap();

    await expect(element(by.id('players'))).toBeVisible();
  });
});
