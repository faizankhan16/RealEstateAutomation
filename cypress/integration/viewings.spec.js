import SignIn from "../support/page_objects/signIn";
import credential from "../fixtures/credential.json";
import selectors from "../fixtures/selectors.json";
import bookAView from "../support/page_objects/bookAView";
const { emailTenant, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.tenantLogin;
const { viewBooking } = selectors;
const login = new SignIn()
const view = new bookAView()

describe('Tests to book a view', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach('visit the website', () => {
        cy.visit("/")
        cy.get('.language').click()
    })

    it('Verify that the tenant can a book a view', () => {
        login.signIn(emailTenant, newPassword)
        view.bookAView('Brännkyrkagatan 79, 118 23 Stockholm, Sverige', '31')
    })
})