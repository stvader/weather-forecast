import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from 'antd';
import WeatherCurrentCity from '../WeatherCurrentCity';
import WeatherCurrentDetails from '../WeatherCurrentDetails';
import { WeatherCurrentContextProvider } from '../WeatherCurrentCityContext';
import TemperatureCurrentCity from '../TemperatureCurrentCity';

const { Title } = Typography;

configure({ adapter: new Adapter() });

const data = 'any';

describe('WeatherCurrentCity', () => {
  it('WeatherCurrentCity render', () => {
    const component = shallow(
      <WeatherCurrentContextProvider value={data}>
        <WeatherCurrentCity />
      </WeatherCurrentContextProvider>,
    );

    const weatherBlock = component.find('.current-weather-block');
    const mainBlock = weatherBlock.find('.current-weather-bloc__main-info-block');
    const details = weatherBlock.find(WeatherCurrentDetails);
    const title = mainBlock.find(Title);
    const tempBlock = mainBlock.find(TemperatureCurrentCity);

    expect(component).toMatchSnapshot();
    expect(weatherBlock).toBeDefined();
    expect(mainBlock).toBeDefined();
    expect(details).toBeDefined();
    expect(title).toBeDefined();
    expect(tempBlock).toBeDefined();
  });
});
