import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function MyOwnChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const data = [1, 2, 5, 3];

  useEffect(
    function loadSVGData() {
      if (!svgRef.current) return;

      const width = 100;
      const height = 150;
      const barWidth = width / data.length;
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data)!])
        .range([height, 0]);

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      svg.attr("width", width).attr("height", height);

      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (_, i) => i * barWidth)
        .attr("y", (y) => yScale(y))
        .style("width", barWidth - 4)
        .style("height", (d) => height - yScale(d))
        .attr("fill", "#3D4D4D");
    },
    [data]
  );

  return <svg ref={svgRef}></svg>;
}
