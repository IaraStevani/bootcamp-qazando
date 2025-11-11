// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>

/// Elementos
const elements = {
    headerLogo: '.header-logo',
    lockIcon: '.fa-lock',
    userField: '#user'
}
// Ações/metodos/funções
Cypress.Commands.add('accessRegisterPage', () => {
    cy.visit('/')
        .get(elements.headerLogo)

    cy.get(elements.lockIcon)
        .click()

    cy.get(elements.userField)
        .should('be.visible')
})