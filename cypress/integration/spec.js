/// <reference types="cypress" />

it('works', () => {
  cy.intercept('https://jsonplaceholder.cypress.io/users', {
    fixture: 'users.json'
  }).as('users')
  cy.visit('/')
  cy.wait('@users', {timeout: 75000})
})
