
// create a function for creating accounts
class CreateAccounts{


    createAccounts(fName, lName, phone, email, password, confirmPassword) {
        // First Name
        cy.get('#FirstName').type(fName)
        cy.get('#FirstName').should('have.value', fName)

        // Last Name
        cy.get('#LastName').type(lName)
        cy.get('#LastName').should('have.value', lName)

        // Phone Number
        cy.get('#Phone').type(phone)
        cy.get('#Phone').should('have.value', phone)

        // Email
        cy.get('#Email').type(email)
        cy.get('#Email').should('have.value', email)

        // Password
        cy.get('#Password').type(password)
        cy.get('#Password').should('have.value', password)

        // Confirm Password
        cy.get('#Password2').type(confirmPassword)
        cy.get('#Password2').should('have.value', confirmPassword)

        // Submit
        cy.get('input[type="submit"]').click()
}

}

export default CreateAccounts;