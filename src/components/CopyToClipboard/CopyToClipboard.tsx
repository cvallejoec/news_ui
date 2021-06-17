import React, { FC, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import './copyToClipboard.css';
import '../Button/button.css';

interface CopyToClipboardType {
  value: string;
  label?: string;
}

export const CopyToClipboardC: FC<CopyToClipboardType> = ({
  value,
  label = 'Copiar',
}) => {
  const [state, setState] = useState({
    value,
    copied: false,
  });

  useEffect(() => {
    // After 3 seconds, the "Copiado!" message is gonna dissapear
    if (state.copied)
      setTimeout(() => {
        setState({ ...state, copied: false });
      }, 3000);
  }, [state]);

  return (
    <div className="copy-clipboard">
      <CopyToClipboard
        text={state.value}
        onCopy={() => setState({ ...state, copied: true })}
      >
        <button className="button button--secondary button--margin-y">
          {label} <FileCopyIcon />
        </button>
      </CopyToClipboard>
      {state.copied && <span>Copiado!</span>}
    </div>
  );
};
