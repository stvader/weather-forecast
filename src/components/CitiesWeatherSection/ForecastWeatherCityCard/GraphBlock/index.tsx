import React, { useEffect, useRef, useContext } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import moment from 'moment';

import { IForecastCity } from '../../../../utils/getForecastForCity';
import GraphBlock from './GraphBlock';
import { ForecastWeatherCityCardContext } from '../ForecastWeatherCityCardContext';
import {
  SCALE_Y_TITLE_SHIFT_X,
  SCALE_Y_TITLE_SHIFT_Y,
  SCALE_X_TITLE_SHIFT_Y,
  SCALE_SHIFT_X,
  SCALE_SHIFT_Y,
} from '../../../../constants/axisTitleConstants';
import { useParamsTypeForecast } from '../../../../hooks/useParamsTypeForecast';
import { IAppState } from '../../../../reducers/types';
import { selectTemperatureSwitcher } from '../../../../selectors';
import { TempUnit } from '../../../../constants/temperatureUnitConstants';
import { addAxisLegend } from '../../../../utils/addAxisLegend';

import { bc } from '../../../../utils/bem-cn';

import './graph-block.scss';

const BLOCK_WIDTH = 400;
const BLOCK_HEIGHT = 200;
const BAR_PADDING = 50;
const VAL_SHIFT_Y = 15;
const DATE_DOMAIN_EXTRA_MIN = 12;
const DATE_DOMAIN_EXTRA_MAX = 20;
const RATIO_TEXT = 1.5;

const addHoursForColumns = (date: any) => moment(date).add(6, 'h');

interface IProps {
  temperatureSwitcher: TempUnit;
}

const b = bc('graph-forecast');

const GraphBlockContainer: React.FC<IProps> = ({ temperatureSwitcher }: IProps) => {
  const d3Container = useRef(null);
  const { forecast, graphType } = useContext(ForecastWeatherCityCardContext);

  const {
    paramDispayed,
    legendSign,
    highLimit,
    lowLimit,
    conversionFunction,
  } = useParamsTypeForecast(graphType, temperatureSwitcher);

  useEffect(() => {
    if (!forecast || !d3Container.current) {
      return;
    }

    const COLUMN_WIDTH = BLOCK_WIDTH / forecast.length - BAR_PADDING;
    const SHIFT_TITLE_TEXT = COLUMN_WIDTH / RATIO_TEXT;

    const dataFormat = forecast.map((item: IForecastCity) => ({
      ...item,
      temperature: conversionFunction(item.temperature),
    }));

    // remove previous svg
    d3.select(d3Container.current)
      .selectAll('svg > *')
      .remove();

    const svg = d3
      .select(d3Container.current)
      .append('svg')
      .attr('width', BLOCK_WIDTH)
      .attr('height', BLOCK_HEIGHT);

    const dateScaleLow = moment(dataFormat[0].dateText).subtract(DATE_DOMAIN_EXTRA_MIN, 'h');
    const dateScaleHigh = moment(dataFormat[dataFormat.length - 1].dateText).add(
      DATE_DOMAIN_EXTRA_MAX,
      'h',
    );

    const x = d3
      .scaleTime()
      .domain([dateScaleLow, dateScaleHigh])
      .range([0, BLOCK_WIDTH]);

    const y = d3
      .scaleLinear()
      .domain([lowLimit, highLimit])
      .range([BLOCK_HEIGHT - SCALE_SHIFT_X, 0]);

    svg
      .selectAll('rect')
      .data(dataFormat)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(addHoursForColumns(d.dateText)) + SCALE_SHIFT_Y - COLUMN_WIDTH)
      .attr('y', (d: any) => y(d[paramDispayed]))
      .attr('width', COLUMN_WIDTH)
      .attr('height', (d: any) => BLOCK_HEIGHT - y(d[paramDispayed]) - SCALE_SHIFT_X)
      .attr('class', b('column'));

    svg
      .selectAll('text')
      .data(dataFormat)
      .enter()
      .append('text')
      .text((d: any) => d[paramDispayed])
      .attr('x', (d: any) => x(addHoursForColumns(d.dateText)) + SCALE_SHIFT_Y - SHIFT_TITLE_TEXT)
      .attr('y', BLOCK_HEIGHT - SCALE_SHIFT_X - VAL_SHIFT_Y)
      .attr('class', b('value'));

    svg
      .append('g')
      .attr('transform', `translate(${SCALE_SHIFT_Y}, ${BLOCK_HEIGHT - SCALE_SHIFT_X})`)
      .call(d3.axisBottom(x));

    svg
      .append('g')
      .attr('transform', `translate(${SCALE_SHIFT_Y}, 0)`)
      .call(d3.axisLeft(y));

    addAxisLegend(svg, {
      xShift: BLOCK_WIDTH,
      yShift: BLOCK_HEIGHT - SCALE_X_TITLE_SHIFT_Y,
      text: 'Days',
    });

    addAxisLegend(svg, {
      xShift: SCALE_Y_TITLE_SHIFT_X,
      yShift: SCALE_Y_TITLE_SHIFT_Y,
      text: legendSign,
    });
  }, [forecast, d3Container, highLimit, legendSign, lowLimit, paramDispayed, conversionFunction]);

  return <GraphBlock width={BLOCK_WIDTH} height={BLOCK_HEIGHT} refLink={d3Container} />;
};

const mapStateToProps = (state: IAppState) => ({
  temperatureSwitcher: selectTemperatureSwitcher(state),
});

export default connect(mapStateToProps)(GraphBlockContainer);
