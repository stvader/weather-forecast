import React, { ReactNode } from 'react';
import { Button, Icon } from 'antd';

import { bc, bcAnt } from '../../../utils/bem-cn';

import './extra-block.scss';

interface IProps {
  handleDelete: () => void;
  children?: ReactNode;
}

const b = bc('extra-block');
const bAnt = bcAnt(b);

const ExtraBlock: React.FC<IProps> = ({ handleDelete, children }: IProps) => (
  <div>
    {children}
    <Button type="link" className={bAnt('close-btn')} onClick={handleDelete}>
      <Icon type="close" />
    </Button>
  </div>
);

export default ExtraBlock;
