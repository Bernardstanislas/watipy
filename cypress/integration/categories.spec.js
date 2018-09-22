/// <reference types="Cypress" />

context('Collections', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('displays collection titles', () => {
        cy.get('.title > .name').should('contain', 'UNE PREMIÈRE COLLECTION');
        cy.get('.title > .name').should('contain', 'UNE SECONDE');
        cy.get('.title > .name').should('contain', 'UNE TROISIÈME');
    });
});
