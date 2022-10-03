import React from "react"
import renderer from "react-test-renderer"
import Article from "../Article.tsx"
import { render, screen } from "@testing-library/react"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Article />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Article />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a separator element", () => {
    render(<Article />)

    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  })

  it("should have 2 buttons to switch", () => {
    render(<Article />)

    const btn = screen.getAllByTestId('btn');
    expect(btn).toHaveLength(2);
  })

  // test handleclick et data avec graphQL
})