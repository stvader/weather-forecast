import React from 'react';

import { D3_WRAPPER, D3_COMPONENT } from '../../../../constants/graphConstants';

interface IProps {
  width: number;
  height: number;
  refLink: any;
}

const GraphBlock: React.FC<IProps> = ({ width, height, refLink }: IProps) => (
  <div className={D3_WRAPPER}>
    <svg className={D3_COMPONENT} width={width} height={height} ref={refLink} />
  </div>
);

export default GraphBlock;
