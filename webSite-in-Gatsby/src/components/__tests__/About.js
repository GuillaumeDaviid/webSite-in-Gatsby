import React from "react"
import renderer from "react-test-renderer"
import About from "../About.tsx"
import { render, screen } from "@testing-library/react"


describe("About", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<About />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("should have a title element", () => {
        render(<About />)
    
        const title = screen.getByTestId('title');
        expect(title).toBeTruthy();
    })

    it("should have a separator element", () => {
        render(<About />)
    
        const separator = screen.getByTestId('separator');
        expect(separator).toBeTruthy();
    })

    it("should have a text element", () => {
        render(<About />)
    
        const text = screen.getByTestId('text');
        expect(text).toBeTruthy();
    })

    it("should have a creativity block", () => {
        render(<About />)
    
        const creativity = screen.getByTestId('creativity');
        expect(creativity).toBeTruthy();
    })
})