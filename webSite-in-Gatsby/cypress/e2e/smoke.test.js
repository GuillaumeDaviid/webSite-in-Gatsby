/// <reference types="Cypress" />

describe("Smoke tests", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Portfolio elements should be visible", () => {
        cy.findAllByTestId("portfolio").should("be.visible")
    })

    it("Article items should be visible", () => {
        cy.findAllByTestId("items").should("be.visible")
    })

    it("Skills items should be visible", () => {
        cy.findAllByTestId("skills").should("be.visible")
    })

    it("Form should be visible", () => {
        cy.findAllByTestId("form").should("be.visible")
    })

    it("Burger Menu should be visible", () => {
        cy.findAllByTestId("burger-menu").should("be.visible")
    })

    it("Nav should be visible", () => {
        cy.findAllByTestId("burger-menu").click()
        cy.findByTestId("nav").should("be.visible")
    })

    it("Click on first item article and posts should be visible", () => {
        cy.findAllByTestId("items").first().click()
    })
})
