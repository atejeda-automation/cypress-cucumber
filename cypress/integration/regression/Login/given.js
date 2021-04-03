import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('i click on logout button', async () => {
    await cy
        .get('.button')
        .click()
})