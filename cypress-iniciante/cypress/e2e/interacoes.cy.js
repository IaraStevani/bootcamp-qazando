/// <reference types="cypress"/>

describe('Interações', () => {
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())

                cy.get('.form-control')
                    .type('testes.iarastevanialves@gmail.com')
            })
    })

    it('Clicar no botão login', () => {
        cy.visit('/')
            .get('.header-logo')

        // clique normal
        cy.get('.fa-user')
            .click()

        // duplo clique
        // cy.get('.fa-user')
        //   .dblclick()

        // clique botão direito
        //cy.get('.fa-user')
        //  .rightclick()

        // clique por coordenada
        // cy.get('.fa-user')
        //   .click(100,100, {force: true})

        // precionar enter
        //cy.get('.form-control')
        //  .type('testes.iarastevanialves@gmail.com{enter}')
    })

    it('Selecionar opção combobox', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })

    it('Checkbox e radio button', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css')
            .check()
    })
})