interface axisFuncParams {
  xShift: number;
  yShift: number;
  text: string;
}

export const addAxisLegend = (svg: any, { xShift, yShift, text }: axisFuncParams) => {
  svg
    .append('text')
    .attr('text-anchor', 'end')
    .attr('y', yShift)
    .attr('x', xShift)
    .text(text);
};
