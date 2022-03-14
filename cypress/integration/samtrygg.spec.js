

describe('Create an account as tenant and landlord', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    it('create account as tenant', () => {
        // Visiting URL 
        cy.visit("/")

        // Cahnging Language To English
        cy.get('.language').click()

        // Accessing Create an account Page
        cy.contains('Create an account').click({force: true})
        cy.get('.contentH1').contains(/create.an.account/i).should('be.visible')

        // Filling the form
        cy.contains('Tenant').click()

        // First Name
        cy.get('#FirstName')
        .type('Mohsin')
        cy.get('#FirstName').should('have.value', 'Mohsin')

        // Last Name
        cy.get('#LastName')
        .type('Test')
        cy.get('#LastName').should('have.value', 'Test')

        // Phone Number
        cy.get('#Phone')
        .type('0123465789')
        cy.get('#Phone').should('have.value', '0123465789')

        // Email
        cy.get('#Email')
        .type('mohsin+1987@samtrygg.se')
        cy.get('#Email').should('have.value', 'mohsin+1987@samtrygg.se')

        // Password
        cy.get('#Password')
        .type('Admin@123')
        cy.get('#Password').should('have.value', 'Admin@123')

        // Confirm Password
        cy.get('#Password2').type('Admin@123')
        cy.get('#Password2').should('have.value', 'Admin@123')

        // Submit
        cy.get('input[type="submit"]').click()
    })

    it('create account as landlord', () => {
        // Visiting URL 
        cy.visit("/")

        // Cahnging Language To English
        cy.get('.language').click()

        // Accessing Create an account Page
        cy.contains('Create an account').click({force: true})
        cy.get('.contentH1').contains(/create.an.account/i).should('be.visible')

        // Filling the form
        cy.contains('Landlord').click()

        // First Name
        cy.get('#FirstName')
        .type('Mohsin')
        cy.get('#FirstName').should('have.value', 'Mohsin')

        // Last Name
        cy.get('#LastName')
        .type('Test')
        cy.get('#LastName').should('have.value', 'Test')

        // Phone Number
        cy.get('#Phone')
        .type('0123465789')
        cy.get('#Phone').should('have.value', '0123465789')

        // Email
        cy.get('#Email')
        .type('mohsin+1987land@samtrygg.se')
        cy.get('#Email').should('have.value', 'mohsin+1987land@samtrygg.se')

        // Password
        cy.get('#Password')
        .type('Admin@123')
        cy.get('#Password').should('have.value', 'Admin@123')

        // Confirm Password
        cy.get('#Password2').type('Admin@123')
        cy.get('#Password2').should('have.value', 'Admin@123')

        // Submit
        cy.get('input[type="submit"]').click()
    })

})