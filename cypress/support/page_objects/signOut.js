class SignOut{
    
    signOut() {
        cy.contains(/menu/i).click()
        // cy.get('body').then( lightBox => {
        //     if(lightBox.text().includes(''))
        // })
        //      {
        //         cy.get('.featherlight-close-icon').click()
        //     cy.get('ul li a').contains(/.+log.+out.+/i).click({force: true})
        //     }
        //     else{
                cy.get('ul li a').contains(/.+log.+out.+/i).click({force: true})
    //         }
    }
}

export default SignOut

// .featherlight-content
// .featherlight-close-icon