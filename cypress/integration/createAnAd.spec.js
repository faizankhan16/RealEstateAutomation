import CreateAccounts from "../support/page_objects/createAccounts.js"
import SignIn from "../support/page_objects/signIn.js"
import SignOut from "../support/page_objects/signOut.js"
import CreateAd from "../support/page_objects/createAd.js"
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

    it('Edit the ad', () => {
        login.signIn('mohsin+020@samtrygg.se', 'Admin@123')
        logout.signOut()

    })

    it.only('Create an ad', () => {
        login.signIn('mohsin+020@samtrygg.se', 'Admin@123')
        ad.createAd()
    })
})