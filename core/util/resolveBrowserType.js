const logger = require('./logger')('chooseBrowserType');

module.exports = function (config, log = false) {
  let browserType = (config.engineOptions && typeof config.engineOptions.browserType === 'string' && config.engineOptions.browserType.toLowerCase()) || 'chromium';

  if (log) {
    if (['chromium', 'firefox', 'webkit'].includes(browserType)) {
      logger.success(`Running in ${browserType}.`);
      return browserType;
    } else {
      logger.error(`Browser type "${browserType}" not recognized! Running in chromium instead.`);
      return 'chromium';
    }
  } else {
    return ['chromium', 'firefox', 'webkit'].includes(browserType) ? browserType : 'chromium';
  }
};
