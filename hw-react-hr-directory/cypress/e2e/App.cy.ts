describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:5173/');
  });

  it('contains a navigation bar', () => {
    cy.get('[data-cy="nav"]').should('exist');
  });

  it('contains a main element', () => {
    cy.get('[data-cy="main"]').should('exist');
  });

  it('contains a footer', () => {
    cy.get('[data-cy="footer"]').should('exist');
  });
});
