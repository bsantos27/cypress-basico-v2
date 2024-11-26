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


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (nome, sobreNome, email, numero, text) {
    cy.get('#firstName').should('be.visible').type(nome);
    cy.get('#lastName').should('be.visible').type(sobreNome);
    cy.get('#email').should('be.visible').type(email);
    cy.get('#phone').should('be.visible').type(numero);
    cy.get('#open-text-area').should('be.visible').type(text);
  
    cy.get('#phone-checkbox').should('be.visible').click();
  
    cy.contains('button', 'Enviar').should('be.visible').click();
  });
  
