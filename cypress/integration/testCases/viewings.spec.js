import SignIn from "../support/page_objects/signIn";
import credential from "../fixtures/credential.json";
import selectors from "../fixtures/selectors.json";
import view from "../support/page_objects/view";
import signOut from "../support/page_objects/signOut";

const { emailTenant, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.tenantLogin;
const { viewBooking, viewCancelling } = selectors;
const login = new SignIn()
const viewing = new view()
const logout = new signOut()

describe('Tests to book a view', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach('visit the website', () => {
        cy.visit("/")
        cy.get('.language').click()
    })

    it('Verify that the tenant can a book a viewing', () => {
        login.signIn(emailTenant, newPassword)
        viewing.bookAView('Brännkyrkagatan 79, 118 23 Stockholm, Sverige', '31')
        logout.signOut()
    })

    it('Verify that the tenant can reschedule a viewing', () => {
        login.signIn(emailTenant, newPassword)
        viewing.rescheduleAView('31')
        logout.signOut()
    })

    it('Verify that the tenant can cancel a viewing', () => {
        login.signIn(emailTenant, newPassword)
        viewing.cancelAView()
        logout.signOut()
    })

})