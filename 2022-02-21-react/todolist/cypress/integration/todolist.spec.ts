describe("todolist", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("heading with text 'todo'", () => {
    cy.contains("h1", /todo/i);
  });

  it("shows 10 li elements", () => {
    cy.get("ul>li").should("have.length", 10);
    // cy.contains("ul").contains("li").should("have.length", 10);
  });

  it("add one todo", () => {
    cy.get("ul>li").should("have.length", 10);
    cy.get('a[href="/add"]').click();
    cy.get("input").type("test");
    cy.contains("button", /add/i).click();
    cy.get("ul>li").should("have.length", 11);
    cy.contains("li", /test/i);
  });
});
