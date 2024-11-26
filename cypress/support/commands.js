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

supportFile: 'cypress/support/index.js', // Ajuste se estiver utilizando comandos personalizados

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (nome, sobreNome, email, numero, text) {
    //const longText = 'Assim, determinar a qualidade de um produto e/ou serviço envolve a realização de uma série de testes para verificar sua qualidade e seu desempenho no mercado, desde o processo inicial, como o planejamento, até sua finalização, como a entrega do produto e/ou serviço.'
    cy.get('#firstName').type(nome);
    cy.get('#lastName').type(sobreNome);
    cy.get('#email').type(email);
    cy.get('#phone').type(numero);
    cy.get('#open-text-area').type(text);

    cy.get('#phone-checkbox').click();

    cy.contains('button', 'Enviar').click();
    
})
