describe('Visit homepage and login flow', () => {
  beforeEach(() => {
    cy.viewport(1440, 860);
    cy.visit('/', { timeout: 8000 });
  });

  it('should log in and view order details from Mi Cuenta', () => {
    cy.login()
    cy.visitMiCuenta()
    cy.viewDetails();
  });
});
