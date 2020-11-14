/* eslint-env browser, node */

module.exports = {
  id: `backstop-remote`,
  viewports: [
    {
      label: 'webview',
      width: 1440,
      height: 900
    }
  ],
  onReadyScript: `playwright/onReady.js`,
  scenarios: [
    {
      label: '{testName}',
      url: '{origin}/backstop/dview/{testId}/{scenarioId}',
      delay: 500
    }
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: [],
  engine: 'playwright',
  engineOptions: {
    browserType: 'chromium',
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 10,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
