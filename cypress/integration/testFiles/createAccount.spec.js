import CreateAccounts from "../../support/page_objects/createAccounts.js"
import SignIn from "../../support/page_objects/signIn.js"
import SignOut from "../../support/page_objects/signOut.js"
import CreateAd from "../../support/page_objects/createAd.js"
const registration = new CreateAccounts()
const login = new SignIn()
const logout = new SignOut()
const ad = new CreateAd()

describe('Create an account as tenant and landlord', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach('visit the webpage', () => {
        cy.visit("/")
        cy.get('.language').click()
    })

    it('Create a tenant account', () => {
        // Accessing Create an account Page
        cy.contains('Create an account').click({force: true})
        cy.get('.contentH1').contains(/create.an.account/i).should('be.visible')

        // Filling the form
        cy.contains('Tenant').click()
        registration.createAccounts('Mohsin', 'Test', '0123465789', 'mohsin+1987@samtrygg.se', 'Admin@123', 'Admin@123')
    })

    it('Create a landlord account', () => {
        // Accessing Create an account Page
        cy.contains('Create an account').click({force: true})
        cy.get('.contentH1').contains(/create.an.account/i).should('be.visible')

         // Filling the form
         cy.contains('Landlord').click()
         registration.createAccounts('Mohsin', 'Test', '0123465789', 'mohsin+1987land@samtrygg.se', 'Admin@123', 'Admin@123')

    })
})