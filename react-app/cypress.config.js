const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  env: {
    codeCoverage: {
      url: 'http://localhost:3000/__coverage__',
      exclude: 'cypress/**/*.*'
    }
  },
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config;
    },
  },
});
