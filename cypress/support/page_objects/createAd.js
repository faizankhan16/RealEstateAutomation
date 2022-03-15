class CreateAd{
    
    createAd() {
        cy.contains(/menu/i).click()
        cy.get('ul li a').contains(/.+edit.+my.+ad.+/i).click({force: true})
        cy.get('div ul li').should('have.class', 'active')

        //No. of stairs
        cy.get('#NoOfStairs').select('4 fl').should('have.value', '4')
        cy.get('.wizard-next').click()

        //Move in date
        cy.get('#txtFromDate').click()
        cy.get('.ui-state-default').contains('18').click()
        cy.get('.ui-state-default').should('contain', '18')

        cy.get('.MB20').click({force: true})
        cy.get('#txtToDate').click()
        cy.get('[title="Next"]').click()
        cy.get('.ui-state-default').contains('16').click()
        cy.get('.ui-state-default').should('contain', '16')


    }

}

export default CreateAd;