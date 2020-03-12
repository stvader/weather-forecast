import React from 'react';
import { Input } from 'antd';

interface IProps {
  inputSearchAddCity: string;
  handleInputCityNameChange: (value: string) => void;
}

const SearchThroughCityNameInput: React.FC<IProps> = ({
  inputSearchAddCity,
  handleInputCityNameChange,
}: IProps) => (
  <Input
    placeholder="City name"
    maxLength={50}
    value={inputSearchAddCity}
    onChange={e => handleInputCityNameChange(e.target.value)}
  />
);

export default SearchThroughCityNameInput;
