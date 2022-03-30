import signIn from "../support/page_objects/signIn.js"
import signOut from "../support/page_objects/signOut.js"
import changePassword from "../support/page_objects/changePassword.js"
import credential from "../fixtures/credential.json"
import selectors from "../fixtures/selectors.json"
const { email, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.landlordLogin;



describe('login form', () => {

beforeAll('visit the website', () => {
    var logout = new signOut()
    var login = new signIn()
    var chPass = new changePassword()
})
    beforeEach('visit the website', () => {
        cy.visit('/')
        cy.get(selectors.language).click()
        cy.contains(/sign.in/i).click({force: true})
    })

    //The user is able to login with valid credentials
    it('Verify that a user can login with valid credentials', () => {
        login.signIn(email, newPassword)
        logout.signOut()
    })

    //The user is not able to login with invalid credentials
    it('Verify that a user is unable to login with invalid credentials', () => {
        login.signIn(invalidEmail, invalidPassword)
        cy.get(selectors.validationMessage).should('contain', 'The e-mail or password you filled in is incorrect')
    })

    //The user cannot login without providing credentials
    it('Verify that a user cannot login without credentials', () => {
        cy.get(selectors.submitButton).click()
        cy.get(selectors.validationMessage).should('contain', 'The e-mail or password you filled in is incorrect')
    })

    //Verify Forgot Password functionality
    it('Verify the forgot password functionality', () => {
        cy.get(selectors.forgotPass).should('contain', 'Forgot your password?').click()
        cy.get(selectors.forgotPassHeader).should('contain', 'Forgot password')
    })

    //Remember me feature
    it('Verify if a user can select the remember me checkbox', () => {
        login.signInRememberMe(email, newPassword)
        logout.signOut()
   })

   //Checking the enter button
   it('Verify a the user can login by pressing the enter button', () => {
    login.signInViaEnter(email, newPassword)
    logout.signOut()
   })

   //User can only login with a new password only after it has been changed
   it('Verify if a user is able to login with a new password only after it has been changed', () => {
    login.signIn(email, newPassword)
    cy.get(selectors.validationMessage).should('contain', 'The e-mail or password you filled in is incorrect')
    login.signIn(email, oldPassword)
    chPass.changePass(oldPassword, newPassword, newPassword)
    logout.signOut()
    login.signIn(email, newPassword)
   })

   afterAll('visit the website', () => {
    logout = null
     login =null
     chPass = null
})
})

