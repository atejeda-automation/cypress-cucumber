/// <reference types="cypress" />
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('i can see the alert with {string}', async (text) => {
    await cy
        .get('#flash')
        .should('to.contain', text)
})

Then('i can see the logout alert with logout text', async () => {
    await cy
        .get('#flash')
        .should('to.contain', 'You logged out of the secure area!')
})

Then('i can see the succes alert', async () => {
    await cy
    .get('#flash')
    .should('to.contain', 'You logged into a secure area!')
})