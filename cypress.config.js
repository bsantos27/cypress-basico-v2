const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
   // baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    //specPattern: 'cypress/e2e/**/*.cy.js', // Caminho dos testes
    supportFile: false, // Ajuste conforme necessário
  }
});
