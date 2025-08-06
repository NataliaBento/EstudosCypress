describe('Página de Login', () => {
    beforeEach (() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });
  it('Deve preencher os campos de login corretamente para entrar no sistema', () => {
    cy.get('[data-test="input-loginEmail"]').type('ana@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });
});