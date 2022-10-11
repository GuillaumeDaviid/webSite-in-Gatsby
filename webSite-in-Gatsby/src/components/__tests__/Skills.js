import React from "react"
import renderer from "react-test-renderer"
import Skills from "../Skills.tsx"
import { render, screen } from "@testing-library/react"

describe("Skills", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Skills />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should have a title element", () => {
    render(<Skills />)

    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  })

  it("should have a project block", () => {
    render(<Skills />)

    const project = screen.getByTestId('project');
    expect(project).toBeTruthy();
  })

  it("should have a separator element", () => {
    render(<Skills />)

    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  })

  it("should have 12 skills elements", () => {
    render(<Skills />)

    const skills = screen.getAllByTestId('skills');
    expect(skills).toHaveLength(12);
  })
})