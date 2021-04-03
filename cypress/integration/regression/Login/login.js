import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

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

Then('i can see the alert with {string}', async (text) => {
    await cy
        .get('#flash')
        .should('to.contain', text)
})

Given('i click on logout button', async () => {
    await cy
        .get('.button')
        .click()
})

Then('i can see the logout alert with logout text', async () => {
    await cy
        .get('#flash')
        .should('to.contain', 'You logged out of the secure area!')
})