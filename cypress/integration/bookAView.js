import SignIn from "../support/page_objects/signIn";
import credential from "../fixtures/credential.json";
import selectors from "../fixtures/selectors.json";
const { emailTenant, newPassword, invalidEmail, invalidPassword, oldPassword } = credential.tenantLogin;
const { viewBooking } = selectors;
const login = new SignIn()

describe('Tests to book a view', () => {
    beforeEach('visit the website', () => {
        cy.visit("/")
        cy.get('.language').click()
    })

    it('Verify that the tenant can a book a view', () => {
        login.signIn(emailTenant, newPassword)
        if(cy.contains('Check your creditscore and get information about new objects 24 h before everybody else').should('be.visible') == true){
        cy.get('div .featherlight-content span[class="icon icon-cross-circle"]').click()}
        cy.get(viewBooking.homePage).click()
        cy.get(viewBooking.searchButtonLandingPage).type('Stockholm').type('{Enter}')
        cy.get(viewBooking.selectAHome).contains('111 47 Stockholm').eq(0).scrollIntoView().click()
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://stage02.dev.samtrygg.se/object/lvavnrjvu5cnjusrydqo/stockholm/stockholm/hamngatan-27/4-rok';
            }).as("popup")
        })
        cy.get('@popup')
            .should("be.called")
        cy.get(viewBooking.crossButton).click()
        cy.get(viewBooking.moveInDate)
    })
})