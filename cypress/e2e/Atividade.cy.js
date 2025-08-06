describe('Atividade aula 1', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

 it('Clica no botão "Ver pets disponíveis para adoção"', () => {
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });


    it('Testa os botões do header (home e mensagens)', () => {
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  });
});

  //Teste da página de login
  describe('Atividade aula 1 - Login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  });
  it('Realiza login com email e senha válidos', () => {
    cy.get('input[name="email"]').type('oicachorro@gmail.com');
    cy.get('input[name="password"]').type('Senha123!');
    cy.contains('button', 'Entrar').click();
  });
});

describe('Atividade aula 1 - HOME', () => {
  beforeEach(() => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  })
  it('4-5 Visite a página de /home do Adopet e clique no botão "Falar com o responsável"', () => {
    cy.get('.header__message').click();
  });
});