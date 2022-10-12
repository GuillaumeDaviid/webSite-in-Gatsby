/// <reference types="Cypress" />

describe("Accessibility tests", () => {
    beforeEach(() => {
        cy.visit("/").get("body")
        cy.injectAxe()
    })
    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y()
    })
  })