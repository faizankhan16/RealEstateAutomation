import selectors from "../../fixtures/selectors.json"
class SignOut{
    
    signOut() {
        cy.contains(/menu/i).click({force: true})
        cy.get(selectors.dropDown).contains(/.+log.+out.+/i).click({force: true})
        cy.get(selectors.landingPageDisplay).should('contain', 'Explore your future home')
    }
}

export default SignOut
