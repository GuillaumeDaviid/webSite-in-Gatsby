import React from "react"
import renderer from "react-test-renderer"
import MoreArticle from "../MoreArticle.tsx"
import { render, screen } from "@testing-library/react"
import { StaticQuery } from "gatsby"
import data from './data/MoreArticle.json'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render(data)
  )
})

describe("MoreArticle", () => {
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

  it("should have 4 items", () => {
    render(<MoreArticle />)

    const item = screen.getAllByTestId('items');
    expect(item).toHaveLength(4);
  })
})