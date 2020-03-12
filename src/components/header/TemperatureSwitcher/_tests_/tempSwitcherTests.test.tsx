import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch, Typography } from 'antd';
import TemperatureSwitcher from '../TemperatureSwitcher';

const { Text } = Typography;

configure({ adapter: new Adapter() });

const mockHandleChange = jest.fn();

describe('TemperatureSwitcher', () => {
  it('render TemperatureSwitcher with C switch', () => {
    const component = shallow(<TemperatureSwitcher isChecked handleChange={mockHandleChange} />);

    const element = component.find('.tempereture-switcher-container');
    const switcher = element.find(Switch);

    expect(component).toMatchSnapshot();
    expect(element).toBeDefined();
    expect(element.children()).toHaveLength(3);
    expect(element.find(Text)).toHaveLength(2);
    expect(switcher).toHaveLength(1);
    expect(switcher.prop('checked')).toBe(true);
    expect(switcher.prop('defaultChecked')).toBe(true);
  });

  it('render TemperatureSwitcher with K switch', () => {
    const component = shallow(
      <TemperatureSwitcher isChecked={false} handleChange={mockHandleChange} />,
    );

    const element = component.find('.tempereture-switcher-container');

    expect(component).toMatchSnapshot();
    expect(element.find(Switch).prop('checked')).toBe(false);
  });
});
