class CreateAd{
    
    createAd() {
        cy.contains(/menu/i).click()
        cy.get('ul li a').contains(/.+edit.+my.+ad.+/i).click({force: true})
        cy.get('div ul li').should('have.class', 'active')


        //'Where is this located' section
        //No. of stairs
        cy.get('#NoOfStairs').select('4 fl').should('have.value', '4')
        cy.get('.wizard-next').click()

        
        //'What is the rent' section
        cy.get('li[data-original-title="What is the rent?"]').should('have.class', 'active')

        //Move in date
        cy.get('#txtFromDate').click()
        cy.get('#ui-datepicker-div .ui-datepicker-month').select('May', {force: true})
        cy.get('#ui-datepicker-div .ui-state-default').contains('20').click()
        cy.get('#txtFromDate').should('have.value', '2022-05-20')

        //Move out date
        // cy.get('.MB20').check({force: true})
        cy.get('#txtToDate').click({force: true})
        cy.get('#ui-datepicker-div .ui-datepicker-month').select('Nov', {force: true})
        cy.get('.ui-datepicker-calendar').contains('22').click({force: true})
        cy.get('#txtToDate').should('have.value', '2022-11-22')

        //Monthly rent
        cy.get('#monthlyrentals').clear().type('2500').should('have.value', '2500')

        //No of rooms
        cy.get('#numofRums').clear().type('8').should('have.value', '8')

        //Sq meters
        cy.get('#areaOfRums').clear().type('500').should('have.value', '500')

        //Next button
        cy.get('button[class="wizard-next btn btn-primary"]').click()
        

        //'Choose teh available amenities' section
        cy.get('li[data-original-title="Choose the available amenities"]').should('have.class', 'active')

        //Amenities
        cy.get('div .css-input input[name="amenity_18"]').check({force: true}).should('be.checked')
        cy.get('div .css-input input[name="amenity_10"]').check({force: true}).should('be.checked')
        cy.get('div .css-input input[name="amenity_7"]').uncheck({force: true}).should('not.be.checked')

        //Included in rent
        cy.get('div .css-input input[name="amenity_12"][value="2"]').check({force: true}).should('be.checked')
        cy.get('div .css-input input[name="amenity_8"][value="3"]').check({force: true}).should('be.checked')

        //Next button
        cy.get('button[class="wizard-next btn btn-primary"]').click()


        //'Describe your property' section
        cy.get('li[data-original-title="Describe your property"]').should('have.class', 'active')

        // Description
        cy.get('#Description').clear().type('This is a nice flat in the heart of the city.').should('have.value', 'This is a nice flat in the heart of the city.')

        //Furnishing
        cy.get('#Furniture').select('Flexible').should('have.value', '4')

        //Type of home
        cy.get('div .css-input input[id="box1"]').check({force: true}).should('be.checked')
        // cy.get('div .css-input input[id="box7"]').check({force: true}).should('be.checked')

        //Next button
        cy.get('button[class="wizard-next btn btn-primary"]').click()


        //'Upload your photos' section
        cy.get('li[data-original-title="Upload photos"]').should('have.class', 'active')

        //Chosse image
        cy.get('input[id="ImageUpload"]').attachFile('vila-leonard.jpg')

        //Next button
        cy.get('button[class="wizard-next btn btn-primary"]').click()


        //Time slots for viewing
        cy.get('li[data-original-title="Choose time slots for viewings of your home"]').should('have.class', 'active')

        //Availability
        // cy.get('div div[class="block time-select checked"] label span').contains(/weekday.evenings./i).click({force: true})
        // cy.get('div div[class="block time-select checked"] label span').contains(/weekday.afternoons./i).click({force: true})

        //closing time slots
        // cy.get('div[id="divtimeblock"]').contains('Slot 1').find('a[class="buttonSmall remove-time-button"]').click({force: true})

        //choose slot
        cy.get('#datepikr_T_01557447').click()
        cy.get('div[class="ui-datepicker-title"] select[class="ui-datepicker-month"]').select('Apr')
        cy.get('table[class="ui-datepicker-calendar"]').contains('16').click()
        cy.get('#datepikr_T_01557447').should('have.value', '2022-04-16')

        //Save
        cy.get('button[class="wizard-finish btn btn-primary"]').click()

}
}

export default CreateAd;