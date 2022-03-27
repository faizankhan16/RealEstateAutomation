import SignIn from "../support/page_objects/signIn";
import credential from "../fixtures/credential.json";
const { emailTenant, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.tenantLogin;
const login = new SignIn()

describe('Tests to book a view', () => {
    beforeEach('visit the website', () => {
        cy.visit("/")
        cy.get('.language').click()
    })

    it('Verify that the tenant can a book a view', () => {
        login.signIn(emailTenant, newPassword)
        // if( cy.contains('Check your creditscore and get information about new objects 24 h before everybody else')){
        // cy.get('div .featherlight-content span[class="icon icon-cross-circle"]').click()}
        cy.get('img[alt="Landing image"]').click()
        cy.get('#hero-search').type('Stockholm').type('{Enter}')
        cy.get('[class="font-weight-normal1 ellipsis-wrap"]').contains('111 47 Stockholm').eq(2).click()
    })
})