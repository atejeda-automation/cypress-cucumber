/// <reference types="cypress" />
import { When } from 'cypress-cucumber-preprocessor/steps'

When('I enter the {string} and {string}', async (username, password) => {
    await cy
        .get('#username')
        .type(username)
    await cy
        .get('#password')
        .type(password)
})

When('I click on continue button', async () => {
    await cy
        .get('form > button[type="submit"]')
        .click()
})

When('I make a login attempt with valid credentials', async () => {
    await cy
    .get('#username')
    .type(Cypress.env('userName'))
await cy
    .get('#password')
    .type(Cypress.env('password'))

await cy
    .get('form > button[type="submit"]')
    .click()
})