describe ('wikipedia', () => {

beforeEach(() => {

  cy.visit("https://en.wikipedia.org");

});

it("page title includes 'wikipedia'", () => {

cy.title().should('match', /wikipedia/i);

});

});