describe("wikipedia", () => {
  beforeEach(() => {
    cy.visit("https://en.wikipedia.org");
  });

  it("page title includes 'wikipedia'", () => {
    cy.title().should("match", /wikipedia/i);
  });

  it("search", () => {
    cy.get("#searchInput").type("cypress");
    cy.get("#searchButton").click();
    cy.get("p").first().should("include.text", "Cypress");
  });
});
