describe("wikipedia", () => {
  beforeEach(() => {
    cy.visit("https://en.wikipedia.org");
  });

  it("page title includes 'wikipedia', version 1", () => {
    cy.title().should("match", /wikipedia/i);
  });

  it("page title includes 'wikipedia', version 2", () => {
    cy.title().should((title) => {
      expect(title).to.match(/wikipedia/i);
    });
  });

  it("wikipedia search for 'cypress' article", () => {
    cy.get("#searchInput").type("cypress");
    cy.get("#searchButton").click();
    cy.get("p")
      .first()
      .should((element) => {
        const text = element.text();
        expect(text).to.match(/cypress/i);
      });
  });
});
