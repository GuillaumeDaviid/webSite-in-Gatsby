import React from "react"
import renderer from "react-test-renderer"
import Portfolio from "../Portfolio.tsx"
import { render, screen } from "@testing-library/react"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Portfolio />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Portfolio />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a separator element", () => {
    render(<Portfolio />)

    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  })

  it("should have a All element", () => {
    render(<Portfolio />)

    const all = screen.getByTestId('all');
    expect(all).toBeTruthy();
  })

  it("should have a front element", () => {
    render(<Portfolio />)

    const front = screen.getByTestId('front');
    expect(front).toBeTruthy();
  })

  it("should have a full element", () => {
    render(<Portfolio />)

    const full = screen.getByTestId('full');
    expect(full).toBeTruthy();
  })

  it("should have a mobile element", () => {
    render(<Portfolio />)

    const mobile = screen.getByTestId('mobile');
    expect(mobile).toBeTruthy();
  })

  it("should have 5 portfolio elements", () => {
    render(<Portfolio />)

    const portfolio = screen.getAllByTestId('portfolio');
    expect(portfolio).toHaveLength(5);
  })

  it("should have 5 links in portfolio element", () => {
    render(<Portfolio />)

    const portfolio = screen.getAllByTestId('link');
    expect(portfolio).toHaveLength(5);
  })
})