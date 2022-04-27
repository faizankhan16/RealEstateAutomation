
describe('Password reset', () => {
    const serverId = 'fmrjpila'
    const serverDomain = 'fmrjpila.mailosaur.net'
    const emailAddress = 'anything@' + serverDomain

    let passwordResetLink

    it('Should be possible to request a reset', () => {
        cy.visit("https://trykandor.com/login-page")
        cy.get('a[class="link footer-link"').contains(/reset.password/i).click()
        cy.get('input[placeholder="Your email"]').type(emailAddress)
        cy.contains(/request.reset/i).click()

        cy.mailosaurGetMessage(serverId, {
            sentTo: emailAddress,
        }).then(email => {
            cy.log(email.subject)
            passwordResetLink = email.html.links[0].href
        })
    })


    it('Should allow the setting of new password', () => {
        cy.visit(passwordResetLink)

        cy.get('[placeholder="Password"]').type('Admin@123')
        cy.contains(/reset.your.password/i).click()
    })

})