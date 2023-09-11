describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="cypress-catalogue"]')
      .should("exist")
      .should("have.text", "Car Catalogue");
  });
});
