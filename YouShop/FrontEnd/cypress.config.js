const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 900,
  video: true,
  env: {
    baseUrl: "https://www.estantevirtual.com.br/",
  },
  e2e: {
    experimentalRunAllSpecs: true,
    hideXHRInCommandLog: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
      "cypress/e2e/scenes/01 - Validar acesso a home page.cy.js"
    ],
  },
});