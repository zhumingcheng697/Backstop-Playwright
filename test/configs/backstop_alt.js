module.exports = {
  id: `playwright_backstop_features`,
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480
    },
    {
      label: 'tablet',
      width: 1024,
      height: 768
    }
  ],
  onBeforeScript: `playwright/onBefore.js`,
  onReadyScript: `playwright/onReady.js`,
  scenarios: [
    {
      label: 'Simple',
      url: 'https://garris.github.io/BackstopJS/'
    }
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: ['browser'],
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
