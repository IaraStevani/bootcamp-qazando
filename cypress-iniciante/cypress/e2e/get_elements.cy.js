describe('GEt Elements', () => {
    it('Encontrar elementos', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('#top_header')
            .contains('Login')

        cy.get('#top_header')
            .find('.fa-user')

        cy.get('#top_header')
            .find('.fa-user')

    })
})