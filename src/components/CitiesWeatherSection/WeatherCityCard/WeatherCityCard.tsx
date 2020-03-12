import React from 'react';
import { Card, Typography } from 'antd';

import WeatherDetails from './WeatherDetails';
import CardExtraInfoState from './CardExtraInfoState';
import WeatherCityTemperature from './WeatherCityTemperature';
import CardExtraBlock from './CardExtraBlock';
import ButtonAction from './ButtonAction';

import { IWeatherCity } from '../../../thunks/transformers/transformerWeatherCity';
import { IStyledObject } from '../../../hooks/useAnimateCards';
import { bc } from '../../../utils/bem-cn';

const { Text } = Typography;

interface IWeatherCityCard {
  data: IWeatherCity;
  isSelected: boolean;
  handleDeleteCard: () => void;
  handleChangeSelect: (value: any) => void;
  handleOpenMap: () => void;
  handleOpenGraphTemp: () => void;
  handleOpenGraphHumidity: () => void;
  handleAddForecastForCompare: () => void;
  styleObject: IStyledObject;
}

const b = bc('weather-card');

const WeatherCityCard: React.FC<IWeatherCityCard> = ({
  data: { id, dateTime, placeName, cloudiness },
  isSelected,
  handleDeleteCard,
  handleChangeSelect,
  handleOpenMap,
  handleOpenGraphTemp,
  handleOpenGraphHumidity,
  handleAddForecastForCompare,
  styleObject,
}: IWeatherCityCard) => (
  <Card
    title={placeName}
    className={b()}
    style={styleObject}
    extra={
      <CardExtraBlock
        value={Number(isSelected)}
        handleChange={handleChangeSelect}
        handleDeleteCard={handleDeleteCard}
      />
    }
  >
    <div className={b('info-wrapper')}>
      <div className={b('info-main')}>
        <WeatherCityTemperature />
        <p>
          <Text>{cloudiness}</Text>
        </p>
        <p>
          <Text strong>{dateTime}</Text>
        </p>
      </div>
      <WeatherDetails />
    </div>
    <div className={b('footer')}>
      <CardExtraInfoState id={id} />

      <ButtonAction name="Map" handleAction={handleOpenMap} />
      <ButtonAction name="Graph Temp" handleAction={handleOpenGraphTemp} />
      <ButtonAction name="Graph Humidity" handleAction={handleOpenGraphHumidity} />
      <ButtonAction name="Compare" handleAction={handleAddForecastForCompare} />
    </div>
  </Card>
);

export default WeatherCityCard;
