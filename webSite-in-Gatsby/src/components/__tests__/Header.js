import React from "react"
import renderer from "react-test-renderer"
import Header from "../Header.tsx"
import { render, screen } from "@testing-library/react"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Header />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a subtitle element", () => {
    render(<Header />)

    const subTitle = screen.getByTestId('subTitle');
    expect(subTitle).toBeTruthy();
  })

  it("should have a nav element", () => {
    render(<Header />)

    const nav = screen.getByTestId('nav');
    expect(nav).toBeTruthy();
  })

  it("should have a scroll element", () => {
    render(<Header />)

    const scroll = screen.getByTestId('scroll');
    expect(scroll).toBeTruthy();
  })

  it("should have a closeNav element", () => {
    render(<Header />)

    const closeNav = screen.getByTestId('closeNav');
    expect(closeNav).toBeTruthy();
  })

  it("should have 4 elements in nav section", () => {
    render(<Header />)

    const li = screen.getAllByTestId('li');
    expect(li).toHaveLength(4);
  })
})