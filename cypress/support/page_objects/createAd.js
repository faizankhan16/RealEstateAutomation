class CreateAd{
    
    createAd(floor, miDate, moMonth, moDate, rent, room, sqFeet) {
        cy.contains(/menu/i).click()
        cy.get('ul li a').contains(/.+edit.+my.+ad.+/i).click({force: true})
        cy.get('div ul li').should('have.class', 'active')

        //No. of stairs
        cy.get('#NoOfStairs').select(floor).should('have.value', '4')
        cy.get('.wizard-next').click()

        cy.get('li[data-original-title="What is the rent?"]').should('have.class', 'active')
        //Move in date
        cy.get('#txtFromDate').click()
        cy.get('.ui-state-default').contains(miDate).click()
        cy.get('.ui-state-default').should('contain', miDate)
        cy.get('#txtFromDate').should('have.value', '2022-03-'+miDate)

        //Move out date
        cy.get('.MB20').click({force: true})
        cy.get('#txtToDate').click({force: true})
        cy.get('.ui-datepicker-month').select(moMonth, {force: true})
        cy.get('.ui-datepicker-month').should('have.value', '5')
        cy.get('.ui-state-default').contains(moDate).click({force: true})
        cy.get('.ui-state-default').should('contain', moDate)
        // cy.get('#txtToDate').should('have.innerText', '2022-06-20')

        //Monthly rent
        cy.get('#monthlyrentals').clear().type(rent).should('have.value', rent)

        //No of rooms
        cy.get('#numofRums').clear().type(room).should('have.value', room)

        //Sq meters
        cy.get('#monthlyrentals').click()
        cy.get('#areaOfRums').clear().then( room => {
            cy.wrap(room).type(sqFeet).should('have.value', sqFeet)
            if(sqFeet > 700) {
                cy.get('div #errSquareMeters .form-error-text').should('have.text', /Square.meters.m².missing.\(between.1.and.700\)/i)
            }
    })
        

}
}

export default CreateAd;