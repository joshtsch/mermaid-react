import mermaid from "mermaid";
import { render } from "@testing-library/react";
import React from "react";
import Mermaid from "../Mermaid";

describe("Mermaid", () => {
  const mermaidInitializeMock = jest
    .spyOn(mermaid, "initialize")
    .mockImplementation(() => null);
  const mermaidRenderMock = jest.spyOn(mermaid, "render").mockReturnValue("");

  it("initializes mermaidAPI and returns a rendered mermaid-chart container", () => {
    const markdown = `
      graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    `;
    const { getByTestId } = render(<Mermaid>{markdown}</Mermaid>);

    expect(mermaidInitializeMock).toBeCalled();
    expect(mermaidRenderMock).toBeCalledWith(
      "thegraph",
      markdown,
      expect.any(Function)
    );
    expect(getByTestId("mermaid-chart")).toBeTruthy();
  });
});
