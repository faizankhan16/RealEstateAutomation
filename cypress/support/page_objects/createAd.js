class CreateAd{
    
    createAd() {
        cy.contains(/menu/i).click()
        cy.get('ul li a').contains(/.+edit.+my.+ad.+/i).click({force: true})
        cy.get('div ul li').should('have.class', 'active')

        //No. of stairs
        cy.get('#NoOfStairs').select('4 fl').should('have.value', '4')
        cy.get('.wizard-next').click()

        cy.get('li[data-original-title="What is the rent?"]').should('have.class', 'active')
        //Move in date
        cy.get('#txtFromDate').click()
        cy.get('#ui-datepicker-div .ui-datepicker-month').select('May', {force: true})
        cy.get('#ui-datepicker-div .ui-state-default').contains('20').click()
        cy.get('#txtFromDate').should('have.value', '2022-05-20')

        //Move out date
        cy.get('.MB20').click({force: true})
        cy.get('#txtToDate').click({force: true})
        cy.get('#ui-datepicker-div .ui-datepicker-month').select('Jun', {force: true})
        // cy.get('.ui-state-default').contains('22').click({force: true})
        // cy.get('#txtToDate').should('have.innerText', '2022-06-20')

        //Monthly rent
        cy.get('#monthlyrentals').clear().type('400').should('have.value', '400')

        //No of rooms
        cy.get('#numofRums').clear().type('5').should('have.value', '5')

        //Sq meters
    //     cy.get('#monthlyrentals').click()
    //     cy.get('#areaOfRums').clear().then( room => {
    //         cy.wrap(room).type(sqFeet).should('have.value', sqFeet)
    //         if(sqFeet > 700) {
    //             cy.get('div #errSquareMeters .form-error-text').should('have.text', /Square.meters.m².missing.\(between.1.and.700\)/i)
    //         }
    // })
        

}
}

export default CreateAd;