import React from 'react';
import { Form, Button } from 'antd';

import SearchThroughCityNameInput from './SearchThroughCityNameInput';

import { bc } from '../../../utils/bem-cn';

const b = bc('city-add-panel');

interface IProps {
  handleSubmitCityThroughName: (e: any) => void;
}

const SearchThroughCityName: React.FC<IProps> = ({ handleSubmitCityThroughName }) => (
  <Form layout="inline" onSubmit={e => handleSubmitCityThroughName(e)} className={b('search-form')}>
    <Form.Item>
      <SearchThroughCityNameInput />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" type="primary">
        Add
      </Button>
    </Form.Item>
  </Form>
);

export default SearchThroughCityName;
