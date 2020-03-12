import React, { useContext } from 'react';

import RequestState from './RequestState';
import { CityAddPanelContext } from '../CityAddPanelContext';

const RequestStateContainer: React.FC = () => {
  const { requestStateInfoElement, messageIncorrectCoords } = useContext(CityAddPanelContext);

  return (
    <RequestState
      requestStateInfoElement={requestStateInfoElement}
      messageIncorrectCoords={messageIncorrectCoords}
    />
  );
};

export default RequestStateContainer;
