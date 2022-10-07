import React from "react"
import renderer from "react-test-renderer"
import Layout from "../Layout.tsx"
import { render, screen } from "@testing-library/react"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Layout />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Layout />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a title element", () => {
    render(<Layout />)

    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  })

  it("should have a title element", () => {
    render(<Layout />)

    const nav = screen.getByTestId('nav');
    expect(nav).toBeTruthy();
  })

  it("should have a title element", () => {
    render(<Layout />)

    const li = screen.getAllByTestId('li');
    expect(li).toHaveLength(3);
  })
})