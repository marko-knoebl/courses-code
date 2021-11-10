describe("todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("page title includes 'React App'", () => {
    cy.title().should((title) => {
      expect(title).to.match(/react app/i);
    });
  });
});
