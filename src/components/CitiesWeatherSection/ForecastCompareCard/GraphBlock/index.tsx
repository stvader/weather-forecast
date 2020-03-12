import React, { useRef, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import moment from 'moment';

import { selectTemperatureSwitcher } from '../../../../selectors';
import GraphBlock from './GraphBlock';
import { ForecastCompareCardContext } from '../ForecastCompareCardContext';
import { IForecastCityWithColor } from '../../../../utils/getListForecastWithColors';
import { DATE_FORMAT_TOOLTIPS } from '../../../../constants/timeFormatsConstants';
import { IAppState } from '../../../../reducers/types';
import { TempUnit } from '../../../../constants/temperatureUnitConstants';
import { useParamTempSwitch } from '../../../../hooks/useParamsTempSwitch';
import { addAxisLegend } from '../../../../utils/addAxisLegend';
import { D3_WRAPPER } from '../../../../constants/graphConstants';

import { bc } from '../../../../utils/bem-cn';

import './graph-compare.scss';

const BLOCK_WIDTH = 500;
const BLOCK_HEIGHT = 300;
const SCALE_SHIFT_X = 35;
const SCALE_SHIFT_Y = 40;
const SCALE_Y_TITLE_SHIFT_X = 20;
const SCALE_Y_TITLE_SHIFT_Y = 10;
const SCALE_X_TITLE_SHIFT_Y = 5;
const TEMPERATURE_DOMAIN_EXTRA = 8;
const DATE_DOMAIN_EXTRA_MIN = 4;
const DATE_DOMAIN_EXTRA_MAX = 15;
const TOOLTIP_SHIFT_X = 115;
const TOOLTIP_SHIFT_Y = 65;
const TOOLTIP_MOUSEOVER_DURATION = 200;
const TOOLTIP_MOUSEOUT_DURATION = 500;

interface IProps {
  temperatureSwitcher: TempUnit;
}

const b = bc('graph-compare');

const GraphBlockContainer: React.FC<IProps> = ({ temperatureSwitcher }: IProps) => {
  const d3Container = useRef(null);
  const data = useContext(ForecastCompareCardContext);

  const { legendSign, highTempLimit, lowTempLimit, conversionFunction } = useParamTempSwitch(
    temperatureSwitcher,
  );

  useEffect(() => {
    if (!data || !d3Container.current) {
      return;
    }

    // remove previous svg
    d3.select(d3Container.current)
      .selectAll('svg > *')
      .remove();

    const div = d3
      .select(`#${D3_WRAPPER}`)
      .append('div')
      .attr('class', b('tooltip'));

    const svg = d3
      .select(d3Container.current)
      .append('svg')
      .attr('width', BLOCK_WIDTH)
      .attr('height', BLOCK_HEIGHT);

    const dateForScaleData = data[0].forecast;
    const dateScaleLow = moment(dateForScaleData[0].dateText).subtract(DATE_DOMAIN_EXTRA_MIN, 'h');
    const dateScaleHigh = moment(dateForScaleData[dateForScaleData.length - 1].dateText).add(
      DATE_DOMAIN_EXTRA_MAX,
      'h',
    );

    const x = d3
      .scaleTime()
      .range([0, BLOCK_WIDTH])
      .domain([dateScaleLow, dateScaleHigh]);

    svg
      .append('g')
      .attr('transform', `translate(${SCALE_SHIFT_Y}, ${BLOCK_HEIGHT - SCALE_SHIFT_X})`)
      .call(d3.axisBottom(x));

    addAxisLegend(svg, {
      xShift: BLOCK_WIDTH,
      yShift: BLOCK_HEIGHT - SCALE_X_TITLE_SHIFT_Y,
      text: 'Days',
    });

    const y = d3
      .scaleLinear()
      .range([BLOCK_HEIGHT - SCALE_SHIFT_X, 0])
      .domain([lowTempLimit, highTempLimit + TEMPERATURE_DOMAIN_EXTRA]);

    svg
      .append('g')
      .attr('transform', `translate(${SCALE_SHIFT_Y}, 0)`)
      .call(d3.axisLeft(y));

    addAxisLegend(svg, {
      xShift: SCALE_Y_TITLE_SHIFT_X,
      yShift: SCALE_Y_TITLE_SHIFT_Y,
      text: legendSign,
    });

    data.forEach((item: IForecastCityWithColor) => {
      const dataFormatForecast = item.forecast.map((itemForecast: any) => ({
        ...itemForecast,
        temperature: conversionFunction(itemForecast.temperature),
      }));

      const lineFunction = d3
        .line()
        .x((d: any) => x(moment(d.dateText)) + SCALE_SHIFT_Y)
        .y((d: any) => y(d.temperature));

      svg
        .append('path')
        .datum(dataFormatForecast)
        .attr('class', b('line'))
        .attr('stroke', item.color)
        .attr('d', lineFunction);

      svg
        .selectAll('circles')
        .data(dataFormatForecast)
        .enter()
        .append('circle')
        .attr('fill', item.color)
        .attr('class', b('dot'))
        .attr('cx', (d: any) => x(moment(d.dateText)) + SCALE_SHIFT_Y)
        .attr('cy', (d: any) => y(d.temperature))
        .on('mouseover', d => {
          div
            .transition()
            .duration(TOOLTIP_MOUSEOVER_DURATION)
            .style('opacity', 0.9);

          const date = moment(d.dateText).format(DATE_FORMAT_TOOLTIPS);

          div
            .html(
              `${item.placeName}<br/>
                  ${date}<br/>                  
                  ${d.temperature} ${legendSign}`,
            )
            .style('left', `${d3.event.offsetX + TOOLTIP_SHIFT_X}px`)
            .style('top', `${d3.event.offsetY + TOOLTIP_SHIFT_Y}px`);
        })
        .on('mouseout', () => {
          div
            .transition()
            .duration(TOOLTIP_MOUSEOUT_DURATION)
            .style('opacity', 0);
        });
    });
  }, [
    data,
    d3Container,
    temperatureSwitcher,
    conversionFunction,
    highTempLimit,
    lowTempLimit,
    legendSign,
  ]);

  return <GraphBlock width={BLOCK_WIDTH} height={BLOCK_HEIGHT} refLink={d3Container} />;
};

const mapStateToProps = (state: IAppState) => ({
  temperatureSwitcher: selectTemperatureSwitcher(state),
});

export default connect(mapStateToProps)(GraphBlockContainer);
