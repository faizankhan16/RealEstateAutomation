import selectors from "../../fixtures/selectors.json"
class CreateAd{
    
    createAd() {
        cy.contains(/menu/i).click({force: true})
        cy.get(selectors.dropDown).contains(/.+edit.+my.+ad.+/i).click({force: true})
        cy.get(selectors.locationNavBar).should('have.class', 'active')


        //'Where is this located' section
        //No. of stairs
        cy.get(selectors.stairs).select('4 fl').should('have.value', '4')
        cy.get(selectors.nextButton).click()

        
        //'What is the rent' section
        cy.get(selectors.calendarNavBar).should('have.class', 'active')

        //Move in date
        cy.get(selectors.moveInCalendar).click()
        cy.get(selectors.month).select('Jun', {force: true})
        cy.get(selectors.date).contains('20').click()
        cy.get(selectors.moveInCalendar).should('have.value', '2022-06-20')

        //Move out date
        // cy.get('.MB20').check({force: true})
        cy.get(selectors.moveOutCalendar).click()
        cy.get(selectors.month).select('Dec', {force: true})
        cy.get(selectors.date).contains('22').click({force: true})
        // cy.get(selectors.moveoutCalendar).should('have.value', '2022-12-22')

        //Monthly rent
        cy.get(selectors.rent).clear().type('2500').should('have.value', '2500')

        //No of rooms
        cy.get(selectors.noOfRooms).clear().type('8').should('have.value', '8')

        //Sq meters
        cy.get(selectors.areaOfRooms).clear().type('500').should('have.value', '500')

        //Next button
        cy.get(selectors.nextButton).click()
        

        //'Choose teh available amenities' section
        cy.get(selectors.amenitiesNavBar).should('have.class', 'active')

        //Amenities
        cy.get(selectors.amenities1).check({force: true}).should('be.checked')
        cy.get(selectors.amenities2).check({force: true}).should('be.checked')
        cy.get(selectors.amenities3).uncheck({force: true}).should('not.be.checked')

        //Included in rent
        cy.get(selectors.includedInRent1).check({force: true}).should('be.checked')

        //Next button
        cy.get(selectors.nextButton).click()


        //'Describe your property' section
        cy.get(selectors.describeProperty).should('have.class', 'active')

        // Description
        cy.get(selectors.descriptionProperty).clear({force: true}).type('This is a nice flat in the heart of the city.').should('have.value', 'This is a nice flat in the heart of the city.')

        //Furnishing
        cy.get(selectors.furnitureProperty).select('Flexible').should('have.value', '4')

        //Type of home
        cy.get(selectors.typeOfHome).check({force: true}).should('be.checked')
        // cy.get('div .css-input input[id="box7"]').check({force: true}).should('be.checked')

        //Next button
        cy.get(selectors.nextButton).click()


        //'Upload your photos' section
        cy.get(selectors.uploadPhotos).should('have.class', 'active')

        //Chosse image
        cy.get(selectors.chooseAnImage).attachFile('vila-leonard.jpg')

        //Next button
        cy.get(selectors.nextButton).click()


        //Time slots for viewing
        cy.get(selectors.timeSlots).should('have.class', 'active')

        //Availability
        // cy.get('div div[class="block time-select checked"] label span').contains(/weekday.evenings./i).click({force: true})
        // cy.get('div div[class="block time-select checked"] label span').contains(/weekday.afternoons./i).click({force: true})

        //choose slot
        cy.get(selectors.dateAndTimeForView).click()
        cy.get(selectors.monthTimeSlot).select('May')
        cy.get(selectors.dateTimeSlot).contains('16').click()
        cy.get(selectors.dateAndTimeForView).should('have.value', '2022-05-16')

        //Save
        cy.get(selectors.finishButton).click()

}
}

export default CreateAd;