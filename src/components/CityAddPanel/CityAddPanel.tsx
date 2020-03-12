import React from 'react';
import { Form, Input, Button } from 'antd';

import { bc, bcAnt } from '../../utils/bem-cn';

import RequestState from './RequestState';
import SearchThroughCityName from './SearchThroughCityName';

interface ICityAddPanel {
  inputSearchCoordsLon: string;
  inputSearchCoordsLat: string;
  handleSubmitCityThroughCoord: (e: any) => void;
  handleInputLonChange: (value: string) => void;
  handleInputLatChange: (value: string) => void;
}

const b = bc('city-add-panel');
const bAnt = bcAnt(b);

const CityAddPanel: React.FC<ICityAddPanel> = ({
  inputSearchCoordsLon,
  inputSearchCoordsLat,
  handleSubmitCityThroughCoord,
  handleInputLonChange,
  handleInputLatChange,
}: ICityAddPanel) => (
  <section className={b()}>
    <RequestState />
    <div className={b('forms-wrapper')}>
      <SearchThroughCityName />
      <Form
        layout="inline"
        onSubmit={e => handleSubmitCityThroughCoord(e)}
        className={b('search-form')}
      >
        <Form.Item>
          <Input
            placeholder="Lon"
            maxLength={10}
            value={inputSearchCoordsLon}
            onChange={e => handleInputLonChange(e.target.value)}
            className={bAnt('coords-search-input')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Lat"
            maxLength={10}
            value={inputSearchCoordsLat}
            onChange={e => handleInputLatChange(e.target.value)}
            className={bAnt('coords-search-input')}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  </section>
);

export default CityAddPanel;
