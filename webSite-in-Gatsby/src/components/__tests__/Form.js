import React from "react"
import renderer from "react-test-renderer"
import Form from "../Form.tsx"
import { render, screen } from "@testing-library/react"

describe("Form", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Form />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Form />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a separator element", () => {
    render(<Form />)

    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  })

  it("should have a text element", () => {
    render(<Form />)

    const text = screen.getByTestId('text');
    expect(text).toBeTruthy();
  })

  it("should have a form element", () => {
    render(<Form />)

    const form = screen.getByTestId('form');
    expect(form).toBeTruthy();
  })

  it("should have a info element", () => {
    render(<Form />)

    const info = screen.getByTestId('info');
    expect(info).toBeTruthy();
  })

  it("should have a reCaptcha element", () => {
    render(<Form />)

    const reCaptcha = screen.getByTestId('reCaptcha');
    expect(reCaptcha).toBeTruthy();
  })
})