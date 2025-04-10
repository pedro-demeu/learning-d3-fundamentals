import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function FirstD3Chart() {
  const d3Container = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!d3Container.current) return;

    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3.select(d3Container.current);
    svg.selectAll("*").remove(); // limpa SVG antes de desenhar

    const width = 300;
    const height = 150;
    const barWidth = width / data.length;

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)!])
      .range([height, 0]);

    svg
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => i * barWidth)
      .attr("y", d => yScale(d))
      .attr("width", barWidth - 4)
      .attr("height", d => height - yScale(d))
      .attr("fill", "#3b82f6");
  }, []);

  return <svg ref={d3Container}></svg>;
}

// O que significa SVG? e como a tag funciona no html