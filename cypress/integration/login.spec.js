import signIn from "../support/page_objects/signIn.js"
import signOut from "../support/page_objects/signOut.js"
import changePassword from "../support/page_objects/changePassword.js"
const logout = new signOut()
const login = new signIn()
const chPass = new changePassword()

describe('tests for login form', () => {
    

    beforeEach('visit the website', () => {
        cy.visit('/')
        cy.get('.language').click()
        cy.contains(/sign.in/i).click({force: true})
    })

    let oldPassword = 'Invalid@123'   
    let newPassword = 'Admin@123'
    let email = 'mohsin+020@samtrygg.se'

    //The user is able to login with valid credentials
    it.only('Login with valid credentials', () => {
        login.signIn(email, newPassword)
        logout.signOut()
    })

    //The user is not able to login with invalid credentials
    it.only('Unable to login with invalid credentials', () => {
        login.signIn('invalid@samtrygg.se', 'Invalid@123')
        cy.get('[class="alert-box info"] span[class="RED"]').should('contain', 'The e-mail or password you filled in is incorrect')
    })

    //The user cannot login without providing credentials
    it.only('Cannot login without credentials', () => {
        cy.get('.col > .button').click()
        cy.get('[class="alert-box info"] span[class="RED"]').should('contain', 'The e-mail or password you filled in is incorrect')
    })

    //Verify Forgot Password functionality
    it.only('Forgot password', () => {
        cy.get('[class="row form-group fl-form-group"] a[class="psswd-reset"]').should('contain', 'Forgot your password?').click()
        cy.get('[class="login"] h2[class="contentH1 fl fl-text-center"]').should('contain', 'Forgot password')
    })

    //Remember me feature
    it.only('Remember me', () => {
        login.signInRememberMe(email, newPassword)
        logout.signOut()
   })

   //Checking the enter button
   it.only('Checking the enter button', () => {
    login.signInViaEnter(email, newPassword)
    logout.signOut()
   })

   //User can only login with a new password only after it has been changed
   it('Change password and login again', () => {
    login.signIn('mohsin+020@samtrygg.se', newPassword)
    cy.get('[class="alert-box info"] span[class="RED"]').should('contain', 'The e-mail or password you filled in is incorrect')
    login.signIn('mohsin+020@samtrygg.se', oldPassword)
    chPass.changePass(oldPassword, newPassword, newPassword)
    logout.signOut()
    login.signIn('mohsin+020@samtrygg.se', newPassword)
   })
})