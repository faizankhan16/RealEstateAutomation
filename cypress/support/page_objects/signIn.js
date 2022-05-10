import selectors from "../../fixtures/selectors.json"
import credential from "../../fixtures/credential.json"
const { emailTenant, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.tenantLogin
class SignIn{ 

signInDetails(email, password) {
    cy.contains(/sign.in/i).click({force: true})
    cy.get(selectors.header).contains(/sign.in/i).should('be.visible')

    //Email
    cy.get(selectors.email).type(email)
    cy.get(selectors.email).should('have.value', email)

    //Password
    cy.get(selectors.password).type(password)
    cy.get(selectors.password).should('have.value', password)
}


signIn(email, password) {

    //Accessing Sign In page
    this.signInDetails(email, password)

    //Submit
    

}

signInViaEnter(email, pass) {

    //Accessing Sign In page
    cy.contains(/sign.in/i).click({force: true})
    cy.get(selectors.header).contains(/sign.in/i).should('be.visible')

    //Email
    cy.get(selectors.email).type(email)
    cy.get(selectors.email).should('have.value', email)

    //Password
    cy.get(selectors.password).type(pass)
    cy.get(selectors.password).should('have.value', pass).type('{enter}')

}
signInRememberMe(email, pass) {

    //Accessing Sign In page
    this.signInDetails(email, pass)

    //Remember me
    cy.get(selectors.rememberMe).check({force: true}).should('be.checked')

    //Submit
    cy.get(selectors.submitButton).click({force: true})

}

}

export default SignIn