module.exports = async (page, scenario) => {
  const hoverSelector = scenario.hoverSelector;
  const clickSelector = scenario.clickSelector;
  const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if (hoverSelector) {
    await page.waitForSelector(hoverSelector);
    await page.hover(hoverSelector);
  }

  if (clickSelector) {
    await page.waitForSelector(clickSelector);
    await page.click(clickSelector);
  }

  if (postInteractionWait) {
    if (typeof postInteractionWait === 'number') {
      await page.waitForTimeout(postInteractionWait);
    } else if (typeof postInteractionWait === 'string') {
      await page.waitForSelector(postInteractionWait);
    }
  }
};
