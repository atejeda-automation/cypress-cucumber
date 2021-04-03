/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  //config.env = config.env || {}
  config.env.userName = process.env.USER_NAME || 'DefaultUser'
  config.env.password = process.env.PASSWORD || 'DefaultPassword'
  console.log(config)
  return config
}
