/* eslint-disable no-use-before-define */
import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface ComboBoxProps {
  label: string;
  options: any[];
  currentValue: string | null;
  handleChange: (value: any) => void;
}

export const ComboBox: FC<ComboBoxProps> = ({
  label,
  options,
  handleChange,
  currentValue,
}) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      // getOptionLabel={(option: any) => option.title}
      style={{ width: 300 }}
      renderInput={(params: any) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      onChange={(e, value) => {
        // console.log(value);
        // setFieldValue('awardId', value?.id || '');
        handleChange(value);
      }}
      value={currentValue}
    />
  );
};
