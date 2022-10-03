import React from "react"
import renderer from "react-test-renderer"
import MoreArticle from "../MoreArticle.tsx"
import { render, screen } from "@testing-library/react"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MoreArticle />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a Article block", () => {
    render(<MoreArticle />)

    const article = screen.getByTestId('article');
    expect(article).toBeTruthy();
  })
})