describe('Atividade aula 1', () => {
  it('Visite a pagina principal do AdoPet e clique no botão "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    })
})

describe('Atividade aula 1', () => {
  it('Visite a página principal do AdotePe e teste os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  })
})

describe('Atividade aula 1', () => {
  it('Visite a página de /login do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.get('input[name="email"]').type('oicachorro@gmail.com');
    cy.get('input[name="password"]').type('Senha123!');
    cy.contains('button', 'Entrar').click();
  })
})

describe('Atividade aula 1', () => {
  it('4-5 Visite a página de /home do Adopet e clique no botão "Falar com o responsável"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('.header__message').click();
  })
})