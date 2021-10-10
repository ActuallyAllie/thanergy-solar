const smallSizes: Cypress.ViewportPreset[] = ['iphone-7'];
const largeSizes: Cypress.ViewportPreset[] = ['ipad-2', 'macbook-11'];

describe('Customers index', () => {
    largeSizes.forEach(size => {
        it('displays correctly on large devices', () => {
            cy.viewport(size);
            cy.visit('http://localhost:3000');
            cy.get('table').should('be.visible');
            cy.get('ul').should('not.be.visible');
            cy.get('tbody tr').should('have.length', 50);
        });
    });

    smallSizes.forEach(size => {
        it('displays correctly on small devices', () => {
            cy.viewport(size);
            cy.visit('http://localhost:3000');
            cy.get('table').should('not.be.visible');
            cy.get('ul').should('be.visible').and('have.length', 50);
        });
    });

    it('navigates to customer view in mobile viewport', () => {
        cy.viewport('iphone-7');
        cy.visit('http://localhost:3000');
        cy.contains('div', 'Phillie').click();
        cy.url().should('contain', '/customers/1')
    });

    it('navigates to customer view in large viewport', () => {
        cy.viewport('macbook-11');
        cy.visit('http://localhost:3000');
        cy.contains('tr', 'Phillie').click();
        cy.url().should('contain', '/customers/1')
    });
});
