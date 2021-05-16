/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default
const report = require('multiple-cucumber-html-reporter')
require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on('after:run', (result) => {
    report.generate({
      jsonDir: 'cypress/cucumber-json',
      reportPath: './reports',
      openReportInBrowser: true,
      displayDuration: true,
      displayReportTime: true,
      customMetadata: true,
      metadata: [
        { name: 'Browser', value: `${result.browserName} - ${result.browserVersion}` },
        { name: 'Platform', value: `${result.osName} - ${result.osVersion}` },
        { name: 'Device', value: 'Desktop' }
      ],
      customData: {
        title: 'Execution info',
        data: [
          { label: 'Cypress version', value: `${result.cypressVersion}`},
          { label: 'Project', value: 'Cypress Cucumber' },
          { label: 'Execution start time', value: result.startedTestsAt },
          { label: 'Execution end time', value: result.endedTestsAt}
        ]
      }
    })
  })

  config.env.baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  config.env.userName = process.env.USER_NAME || 'DefaultUser'
  config.env.password = process.env.PASSWORD || 'DefaultPassword'
  return config
}
