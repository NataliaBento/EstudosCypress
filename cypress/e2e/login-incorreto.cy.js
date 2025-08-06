describe('Página de Login', () => {
    beforeEach (() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });
  it('Deve preencher os campos de login incorretamente e exibir mensagens de erro', () => {
    cy.get('[data-test="input-loginEmail"]').as('#email').type('sdfsdfsd');
    cy.get('[data-test="input-loginPassword"]').as('#senha').type('asdas');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
  });
});