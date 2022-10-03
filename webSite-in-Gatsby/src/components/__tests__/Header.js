import React from "react"
import renderer from "react-test-renderer"
import Header from "../Header.tsx"
import { render } from "@testing-library/react"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})