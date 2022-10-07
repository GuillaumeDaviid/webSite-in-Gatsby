import React from "react"
import renderer from "react-test-renderer"
import  Article  from "../Article.tsx"
import { StaticQuery } from "gatsby"
import {handleClickNext} from '../Article.tsx'
import { render, screen } from "@testing-library/react"
import data from './data/Article.json'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render(data)
  )
})

describe("Article", () => {
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

  it("should change state with handleClickNext function", () => {
    render(<Article />) 
    jest.spyOn(React, 'useState').mockReturnValue({ p: 0, nbr: 1 });
    // test à retravailler
  })
/*
  it("should have 10 items", () => {
    render(<Article />)

    const item = screen.getByTestId('items');
    expect(item).toBeTruthy();
  })
*/
  
  // test handleclick et data avec graphQL
})