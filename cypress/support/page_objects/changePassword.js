import selectors from "../../fixtures/selectors.json"
class ChangePassword {
    
    changePass (oldPass, newPass, confirmPass) {
    cy.get(Selectors.dropDown).contains(/.+settings.+/i).click({force: true})
    cy.get(Selectors.oldPassword).type(oldPass).should('have.value', oldPass)
    cy.get(Selectors.newPassword).type(newPass).should('have.value', newPass)
    cy.get(Selectors.confirmNewPass).type(confirmPass).should('have.value', confirmPass)
    cy.get(Selectors.saveNewPass).click()
}
}

export default ChangePassword