
/// <reference types="cypress"/>

/// Elementos
const elements = {
    headerLogo: '.header-logo',
    lockIcon: '.fa-lock',
    userField: '#user'
}

// Ações/metodos/funções
export default {
    accessRegisterPage() {
        cy.visit('/')
            .get(elements.headerLogo)

        cy.get(elements.lockIcon)
            .click()

        cy.get(elements.userField)
            .should('be.visible')
    }
}