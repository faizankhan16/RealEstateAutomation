class CreateAd{
    
    createAd() {
        cy.contains(/menu/i).click()
        cy.get('ul li a').contains(/.+edit.+my.+ad.+/i).click({force: true})

    }
}

export default CreateAd;