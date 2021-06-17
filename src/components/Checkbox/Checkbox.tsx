import React, { FC } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface CheckboxCProps {
  label: string;
  checked: boolean;
  handleChange: () => void;
}

export const CheckboxC: FC<CheckboxCProps> = ({
  label,
  checked,
  handleChange,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          name="checkedB"
          color="primary"
          onClick={handleChange}
        />
      }
      label={label}
    />
  );
};
