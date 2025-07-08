describe('Visit homepage and login flow', () => {
  beforeEach(() => {
    cy.viewport(1440, 860);
    cy.visit('/', { timeout: 8000 });
  });

  it.only('should load the home page successfully', () => {
    cy.verifyHomePageLoaded()
  });

  it('should login successfully with valid credentials from homepage', () => {
    cy.loginWithValidCredentials()
  })
});


