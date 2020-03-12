import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from 'antd';
import TemperatureCurrentCity from '../TemperatureCurrentCity';

const { Title } = Typography;

configure({ adapter: new Adapter() });

describe('TemperatureCurrentCity', () => {
  it('render TemperatureCurrentCity', () => {
    const component = shallow(<TemperatureCurrentCity />);

    const title = component.find(Title);

    expect(component).toMatchSnapshot();
    expect(title).toBeDefined();
  });
});
