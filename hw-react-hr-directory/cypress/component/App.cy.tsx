import App from '../../src/App';

describe('<App />', () => {
  beforeEach(() => {
    cy.mount(<App />).as('app');
  });

  it('mounts', () => {
    cy.get('@app').should('exist');
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
