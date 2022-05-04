beforeEach(
  () => {
    cy.visit('https://en.wikipedia.org');
  }
);

it(
  "page title includes 'Wikipedia'",
  () => {
    cy.title().should('match', /wikipedia/i);
  }
);

it(
  "contains 'news' heading",
  () => {
    cy.contains("h2", /in the news/i);
    cy.contains("h2", /in the newx/i).should("not.exist");
  }
);

it(
  "search", () => {
    cy.get('#searchInput').type('cypress');
    cy.get('#searchButton').click();
    cy.get('p').first().should('include.text', 'Cypress');
  }
)