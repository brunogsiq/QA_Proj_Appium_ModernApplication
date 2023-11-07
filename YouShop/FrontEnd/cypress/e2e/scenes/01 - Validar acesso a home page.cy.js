/// <reference types="cypress" /> 

import { elements } from "../library/pageObjects/elements";

context('01 - Web - Validações de Testes Funcionais - Tela Home Page', () =>
{
    beforeEach(() =>
    {
        cy.visit(Cypress.env("baseUrl"))
        //Aceitando cookies
        cy.get('#cmp-button')
            .click()
    });

    describe('01.01 - Web - Home Page', () =>
    {
        it('01.01 - Validar Acesso', () =>
        {
            let pO = elements()
            cy.get(pO.logotipo)
                .should("be.exist")
                .and("be.visible")
                .and("have.prop", "class");
        })

        it('01.2 - Validar Acesso a Tela Sebo e Livros', () =>
        {
            let pO = elements()
            cy.get(pO.btnSeboLivros)
                .click()

            cy.waitUntil(() => 
                cy.get(pO.titleSeboLivros)
                .should("be.visible"))

            cy.get(pO.titleSeboLivros)
                .should("be.visible")
                .contains(" Sebos e Livreiros em todo o Brasil ")
                .and("have.css", "color", "rgb(85, 85, 85)")
        })
    })
});