import React from 'react';
import { Button } from 'antd';

import { bc, bcAnt } from '../../../utils/bem-cn';

const b = bc('weather-card');
const bAnt = bcAnt(b);

interface IProps {
  name: string;
  handleAction: () => void;
}

const ButtonAction: React.FC<IProps> = ({ name, handleAction }: IProps) => (
  <Button type="primary" shape="round" onClick={handleAction} className={bAnt('footer-btn')}>
    {name}
  </Button>
);

export default ButtonAction;
