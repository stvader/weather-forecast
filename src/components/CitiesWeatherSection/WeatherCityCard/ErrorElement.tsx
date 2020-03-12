import React from 'react';
import { bc } from '../../../utils/bem-cn';

interface IProps {
  text: string;
}

const b = bc('weather-card');

const ErrorElement: React.FC<IProps> = ({ text }: IProps) => (
  <div className={b('card-state').mix(b('error-state'))}>{text}</div>
);

export default ErrorElement;
