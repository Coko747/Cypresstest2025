// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as loginElements from '../elements/loginelements';
import * as historyElements from '../elements/historyelements';

//  Verify page correct loads
Cypress.Commands.add('verifyHomePageLoaded', () => {
  //cy.contains(loginElements.homeMainTitle, { timeout: 1000 }).should('be.visible');
  cy.get(loginElements.homeMainTitle, { timeout: 15000 }).eq(0).should('have.text', 'Laboratorio');
  cy.get(loginElements.homeMainTitle, { timeout: 15000 }).eq(1).should('have.text', 'De Testing');
});

// Login  whit valid credentials
Cypress.Commands.add('loginWithValidCredentials', () => {
  cy.contains(loginElements.accederLink).click();
  cy.contains(loginElements.loginTitle).should('be.visible');
  cy.get(loginElements.emailInput).type('huge.test@gmail.com');
  cy.get(loginElements.passwordInput).type('Huge2025.');
  cy.get(loginElements.loginButton).click();
  cy.contains(/mi cuenta|cerrar sesión|orden/i, { timeout: 10000 }).should('be.visible');
  cy.contains(loginElements.logoutLink).click();  
  cy.contains(loginElements.accederLink).should('be.visible'); 
});

// Login  with invalid credentials
Cypress.Commands.add('loginWithInvalidCredentials', (email, password) => {
  cy.contains(loginElements.accederLink).click();
  cy.contains(loginElements.loginTitle).should('be.visible');
  cy.get(loginElements.emailInput).type(email);
  cy.get(loginElements.passwordInput).type(password);
  cy.get(loginElements.loginButton).click();
});

// Validar modal de  login fallido
Cypress.Commands.add('validateErrorModal', () => {
  cy.contains(loginElements.errorModalText).should('be.visible');
  cy.contains(loginElements.volverButton).should('be.visible').click();
  cy.contains(loginElements.loginTitle).should('be.visible');
});

// validar order History
// Command: Visit "Mi Cuenta"
Cypress.Commands.add('visitMiCuenta', () => {
  cy.contains('a', 'Mi Cuenta', { timeout: 40000 }).should('be.visible').click();
  cy.url().should('include', '/my-account');
  cy.contains('Mi Cuenta').should('be.visible');
});

// Command: Select the first order from the order list
Cypress.Commands.add('selectFirstOrder', () => {
  cy.get(historyElements.ordersListLinks).first().click();
  cy.url().should('include', '/mi-cuenta/pedidos'); // Adjust path as needed
  cy.get(historyElements.orderDetailsTitle).should('contain', 'Detalles del pedido');
});
// Login
Cypress.Commands.add('login', () => {
  cy.contains(loginElements.accederLink).click();
  cy.contains(loginElements.loginTitle).should('be.visible');
  cy.get(loginElements.emailInput).type('huge.test@gmail.com');
  cy.get(loginElements.passwordInput).type('Huge2025.');
  cy.get(loginElements.loginButton).click();
  cy.contains(/mi cuenta|cerrar sesión|orden/i, { timeout: 10000 }).should('be.visible');
});
//Ver view details
Cypress.Commands.add('viewDetails', () => {
  historyElements.firstOrderDetailsLink()
    .should('be.visible')
    .first()
    .click();
    cy.get(historyElements.detalles, { timeout: 10000 }).should('be.visible');
});
