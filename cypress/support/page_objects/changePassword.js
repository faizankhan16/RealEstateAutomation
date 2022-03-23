class ChangePassword {
    
    changePass (oldPass, newPass, confirmPass) {
    cy.get('ul li a').contains(/.+settings.+/i).click({force: true})
    cy.get('#OldPass').type(oldPass).should('have.value', oldPass)
    cy.get('#Pass').type(newPass).should('have.value', newPass)
    cy.get('#ConfirmPass').type(confirmPass).should('have.value', confirmPass)
    cy.get('input[onclick="return ValidatePasswords();"]').click()
}
}

export default ChangePassword