// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
//// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html');
    })


    it('verifica o título da aplicação', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');

    })

    it('Preenche os campos obrogatorios e envia o formulario', function () {

        const longText = 'Assim, determinar a qualidade de um produto e/ou serviço envolve a realização de uma série de testes para verificar sua qualidade e seu desempenho no mercado, desde o processo inicial, como o planejamento, até sua finalização, como a entrega do produto e/ou serviço.'
        cy.get('#firstName').type('Bruno');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('bcs.2707@gmail.com');
        cy.get('#phone').type('71991573226');
        cy.get('#open-text-area').type(longText, { delay: 0 });

        cy.get('#phone-checkbox').click();

        cy.contains('button', 'Enviar').click();
        cy.get('.success').should('be.visible');
    })

    it('Verificar se o email foi digitado certo', function () {

        cy.get('#firstName').type('Bruno');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('bcs.270gmail.com');
        cy.get('#phone').type('71991573226');
        cy.get('#open-text-area').type('test');


        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('Campo telefone continua vazio quando digitar valor nao numerico', function () {

        cy.get('#phone')
            .type('fhdusfhdsiu')
            .should('have.value', '');
    })

    it('mensagem de erro com telefone em branco', function () {

        cy.get('#firstName').type('Bruno');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('bcs.270gmail.com');
        cy.get('#phone-checkbox').click();

        cy.get('#open-text-area').type('test');


        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('Prencher e limpar os campos', function () {

        cy.get('#firstName')
            .type('Bruno')
            .should('have.value', 'Bruno')
            .clear()
            .should('have.value', '');

        cy.get('#lastName')
            .type('Santos')
            .should('have.value', 'Santos')
            .clear()
            .should('have.value', '');

    })

    it('Criar mensagem de erro quando os campos obrigatorios nao forem preenchidos', function () {

        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('Enviar o formulario com sucesso usando o comando customizado', function () {

        cy.fillMandatoryFieldsAndSubmit('Bruno', 'Santos', 'bcs.2707@gmail.com','71991573226', 'testando o text');

        cy.get('.success').should('be.visible');

    })

    it('selecionando um produto pelo seu texto', function(){
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube');
    })

    it('selecionando um produto pelo seu valor', function(){
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria');
    })

    it('selecionando um produto pelo seu indice', function(){
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog');
    })

})