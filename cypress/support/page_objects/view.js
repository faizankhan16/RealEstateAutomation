import selectors from "../../fixtures/selectors.json"
const { viewBooking, viewCancelling } = selectors;

class View {

    bookAView (address, viewDate) {
        cy.get(viewBooking.homePage).click()
        cy.get(viewBooking.searchButtonLandingPage).type(address).type('{Enter}')
        cy.get(viewBooking.selectAHome).eq(0).scrollIntoView().invoke('removeAttr','target').click()
        cy.get(viewBooking.houseName).should('be.visible')
        cy.get(viewBooking.bookAViewing).contains('Book a viewing').click()
        //If the header is visible
        cy.get('body').then($body => {
            if ($body.text().includes('Booked viewing')) {
            cy.log('The view has already been booked')
            } else {
                cy.get(viewBooking.viewTimesHeader).should('contain', 'Select viewing times')
                cy.get(viewBooking.viewingDay).contains(viewDate).click()
                cy.get(viewBooking.viewingTime).contains('Select').click()
                cy.get(viewBooking.confirmViewing).click()
            }
    })
        cy.get(selectors.dropDown).contains(/.+viewings.+/i).click({force: true})
        cy.get(viewBooking.viewNavBar).should('contain', 'Viewings')
        cy.get(viewBooking.viewCard).should('contain', viewDate)
}


    cancelAView () {
        cy.get(selectors.dropDown).contains(/.+viewings.+/i).click({force: true})
        cy.get('body').then(body => {
            if (body.text().includes('Join the digital viewing')){
                cy.get(viewCancelling.viewCardOptions).click({force: true})
                cy.get(viewCancelling.viewOptionsDropdown).contains('Cancel').click({force: true})
                cy.get(viewCancelling.cancelButton).click({force: true})
                cy.get(viewBooking.confirmViewing).click({force: true})
            } else {
                cy.log('You do not have a view booked.')
            }
        })
    }

}

export default View