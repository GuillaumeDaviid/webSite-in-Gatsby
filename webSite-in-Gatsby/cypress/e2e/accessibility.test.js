/// <reference types="Cypress" />

describe("Accessibility tests", () => {
    beforeEach(() => {
        cy.visit("/").get("body")
        cy.injectAxe()
    })
    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y()
    })
    it("Navigates to page Blog and checks for accessibility violations", () => {
        cy.findByTestId("burger-menu")
          .click()
        cy.findByText("Blog").click()
        cy.checkA11y
      })
  })