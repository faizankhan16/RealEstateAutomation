
class SignIn{ 

signIn(email, pass) {

    //Accessing Sign In page
    cy.contains(/sign.in/i).click({force: true})
    cy.get('.contentH1').contains(/sign.in/i).should('be.visible')

    //Email
    cy.get('#loginEmail').type(email)
    cy.get('#loginEmail').should('have.value', email)

    //Password
    cy.get('#loginPassword').type(pass)
    cy.get('#loginPassword').should('have.value', pass)

    //Submit
    cy.get('.col > .button').click({force: true})

}

signInViaEnter(email, pass) {

    //Accessing Sign In page
    cy.contains(/sign.in/i).click({force: true})
    cy.get('.contentH1').contains(/sign.in/i).should('be.visible')

    //Email
    cy.get('#loginEmail').type(email)
    cy.get('#loginEmail').should('have.value', email)

    //Password
    cy.get('#loginPassword').type(pass)
    cy.get('#loginPassword').should('have.value', pass).type('{enter}')

}
signInRememberMe(email, pass) {

    //Accessing Sign In page
    cy.contains(/sign.in/i).click({force: true})
    cy.get('.contentH1').contains(/sign.in/i).should('be.visible')

    //Email
    cy.get('#loginEmail').type(email)
    cy.get('#loginEmail').should('have.value', email)

    //Password
    cy.get('#loginPassword').type(pass)
    cy.get('#loginPassword').should('have.value', pass)

    //Remember me
    cy.get('#save-password').check({force: true}).should('be.checked')

    //Submit
    cy.get('.col > .button').click({force: true})

}

}

export default SignIn