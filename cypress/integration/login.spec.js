/// <reference types="cypress" />

describe('Login', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('usuario com dados corretos clicando no botão ', () => {
        cy.get('[data-cy=username]').type('teste@gmail.com');
        cy.get('[data-cy=password]').type('123456');
        cy.get('[data-cy=button-submit]').click();
        cy.url().should('include', '/home');
    });

    it('usuario com dados corretos usando Enter ', () => {
        cy.get('[data-cy=username]').type('teste@gmail.com');
        cy.get('[data-cy=password]').type('123456{enter}');
        cy.url().should('include', '/home');
    });

    it('usuario sem dados corretos clicando no botão', () => {
        cy.get('[data-cy=username]').type('teste@gmail.com');
        cy.get('[data-cy=password]').type('aaa');
        cy.get('[data-cy=button-submit]').click();
        cy.url().should('include', '/');
        cy.get('.swal2-popup').should('exist');
    });

    it('usuario sem dados corretos usando Enter', () => {
        cy.get('[data-cy=username]').type('teste@gmail.com');
        cy.get('[data-cy=password]').type('aaa{enter}');
        cy.url().should('include', '/');
        cy.get('.swal2-popup').should('exist');
    });
})