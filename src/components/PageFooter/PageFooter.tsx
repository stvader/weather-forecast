import React from 'react';

import { COPY_RIGHT } from '../../constants/copyRight';

import { bc } from '../../utils/bem-cn';

const b = bc('page-footer');

const PageFooter: React.FC = () => (
  <footer className={b()}>
    <span>{COPY_RIGHT}</span>
  </footer>
);

export default PageFooter;
