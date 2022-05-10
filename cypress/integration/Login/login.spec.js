import signIn from "../../support/page_objects/signIn.js"
import signOut from "../../support/page_objects/signOut.js"
import changePassword from "../../support/page_objects/changePassword.js"
import credential from "../../fixtures/credential.json"
import selectors from "../../fixtures/selectors.json"
const login = new signIn()
const logout = new signOut()

// describe('Samtrygg login with valid credentials', () => {
    Given('I am on the login page', () => {
        cy.visit('/')
        cy.get(selectors.language).click()
        cy.contains(/sign.in/i).click({force: true})
    })

    //The user is able to login with valid credentials
    When('I enter my', (datatable) => {
        datatable.hashes().forEach(element => {
            login.signIn(element.email, element.password)
        })
    })

    //Click teh login button
    And('I click the login button', () => {
        cy.get(selectors.submitButton).click({force: true})
    })

    //The user cannot login without providing credentials
    Then('I should be logged in', () => {
        cy.get('div[class="dash-content col medium-12 small-12"] a').should('contain', 'Choose time slots for viewings of your home')
    })

//     //Verify Forgot Password functionality
//     it('Verify the forgot password functionality', () => {
//         cy.get(selectors.forgotPass).should('contain', 'Forgot your password?').click()
//         cy.get(selectors.forgotPassHeader).should('contain', 'Forgot password')
//     })

//     //Remember me feature
//     it('Verify if a user can select the remember me checkbox', () => {
//         login.signInRememberMe(email, newPassword)
//         logout.signOut()
//    })

//    //Checking the enter button
//    it('Verify a the user can login by pressing the enter button', () => {
//     login.signInViaEnter(email, newPassword)
//     logout.signOut()
//    })

//    //User can only login with a new password only after it has been changed
//    it('Verify if a user is able to login with a new password only after it has been changed', () => {
//     login.signIn(email, newPassword)
//     cy.get(selectors.validationMessage).should('contain', 'The e-mail or password you filled in is incorrect')
//     login.signIn(email, oldPassword)
//     chPass.changePass(oldPassword, newPassword, newPassword)
//     logout.signOut()
//     login.signIn(email, newPassword)
//    })

// })

