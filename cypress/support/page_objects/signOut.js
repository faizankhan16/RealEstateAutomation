class SignOut{
    
    signOut() {
        cy.contains(/menu/i).click()
        cy.get('ul li a').contains(/.+log.+out.+/i).click({force: true})
        cy.get('[class="medium-12"] h1[class="top-section-panel__h1"]').should('contain', 'Explore your future home')
    }
}

export default SignOut
