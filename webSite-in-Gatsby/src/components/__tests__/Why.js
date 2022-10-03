import React from "react"
import renderer from "react-test-renderer"
import Why from "../Why.tsx"
import { render, screen } from "@testing-library/react"

describe("Why", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Why />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Why />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a separator element", () => {
    render(<Why />)

    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  })

  it("should have a text element", () => {
    render(<Why />)

    const text = screen.getByTestId('text');
    expect(text).toBeTruthy();
  })

  it("should have 3 items", () => {
    render(<Why />)

    const items = screen.getAllByTestId('items');
    expect(items).toHaveLength(3);
  })
})