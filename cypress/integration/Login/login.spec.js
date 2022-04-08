import signIn from "../../support/page_objects/signIn.js"
import signOut from "../../support/page_objects/signOut.js"
import changePassword from "../../support/page_objects/changePassword.js"
import credential from "../../fixtures/credential.json"
import selectors from "../../fixtures/selectors.json"
const { emailLandlord, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.landlordLogin;
const login = new signIn()
const logout = new signOut()


describe('login form', () => {

    Given('I am on the login page', () => {
        cy.visit('/')
        cy.get(selectors.language).click()
        cy.contains(/sign.in/i).click({force: true})
        cy.get(selectors.header).contains(/sign.in/i).should('be.visible')
    })

    When('I enter my', (datatable) => {
        datatable.hashes().forEach((value) => {
        //Email
        cy.get(selectors.email).type(value.email)
        cy.get(selectors.email).should('have.value', value.email)

        //Password
        cy.get(selectors.password).type(value.password)
        cy.get(selectors.password).should('have.value', value.password)
        })
    })

    
    And('I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    Then('I should be logged in', () => {
        cy.get(selectors.viewBooking.viewingHeader).contains('Choose time slots for viewings of your home').should('be.visible')
    })

})

