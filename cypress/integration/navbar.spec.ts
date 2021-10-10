const sizes: Cypress.ViewportPreset[] = ['iphone-7', 'ipad-2', 'macbook-11'];

describe('Navbar', () => {
    sizes.forEach(size => {
        it('links work', () => {
            cy.viewport(size);
            cy.visit('http://localhost:3000');
            cy.contains('Solar Farms').click();
            cy.url().should('include', '/solar-farms');
            cy.contains('Customers').click();
            cy.url().should('not.include', '/solar-farms');
        });
    });
});
