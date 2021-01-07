import React, { HTMLAttributes, useState, useEffect } from "react";
import mermaid from "mermaid";

export interface MermaidProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {}

export default function Mermaid({ children }: MermaidProps) {
  const [svg, setSvg] = useState("<svg />");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false });
    mermaid.render("thegraph", `${children}`, (svgCode) => setSvg(svgCode));
  }, [children]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      data-testid="mermaid-chart"
    />
  );
}
