import selectors from "../../fixtures/selectors.json"
// create a function for creating accounts
class CreateAccounts{


    createAccounts(fName, lName, phone, email, password, confirmPassword) {
        // First Name
        cy.get(Selectors.firstName).type(fName)
        cy.get(Selectors.firstName).should('have.value', fName)

        // Last Name
        cy.get(Selectors.lastName).type(lName)
        cy.get(Selectors.lastName).should('have.value', lName)

        // Phone Number
        cy.get(Selectors.phoneNo).type(phone)
        cy.get(Selectors.phoneNo).should('have.value', phone)

        // Email
        cy.get(Selectors.createAccEmail).type(email)
        cy.get(Selectors.createAccEmail).should('have.value', email)

        // Password
        cy.get(Selectors.createAccPassword).type(password)
        cy.get(Selectors.createAccPassword).should('have.value', password)

        // Confirm Password
        cy.get(Selectors.confirmPass).type(confirmPassword)
        cy.get(Selectors.confirmPass).should('have.value', confirmPassword)

        // Submit
        cy.get(Selectors.createAccSubmitButton).click()
}

}

export default CreateAccounts;