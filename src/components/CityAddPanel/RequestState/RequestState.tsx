import React, { ReactElement } from 'react';

import { bc } from '../../../utils/bem-cn';

const b = bc('city-add-panel');

interface IProps {
  requestStateInfoElement: null | string | ReactElement;
  messageIncorrectCoords: null | string;
}

const RequestState: React.FC<IProps> = ({
  requestStateInfoElement,
  messageIncorrectCoords,
}: IProps) => (
  <div>
    {requestStateInfoElement}
    <span className={b('error')}>{messageIncorrectCoords}</span>
  </div>
);

export default RequestState;
