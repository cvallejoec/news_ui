import React, { useEffect } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import pptxgen from 'pptxgenjs';
import GetAppIcon from '@material-ui/icons/GetApp';

import { config } from '../../config';
import { getCurrentMonth } from '../../helpers/getMonthName';
import { getFormattedDate } from '../../helpers/getFormattedDate';

const pptx = new pptxgen();

// Mes y día:   12.20 x 10.53   3.24 x 1.01
// Año:         13.00 x 11.09   2.44 x 1.27

// Título       10.68 x 3.96    19.52 x 2.11
// Cuerpo       13.67 x 7.74    18.18 x 8.24
// Info         19.92 x 15.93   18.18 x 0.47

export const Downloader = () => {
  const { ppt } = config;

  const slide = pptx.addSlide();
  slide.addImage({
    path: ppt.urls.portada,
    w: ppt.fullWidth,
    h: ppt.fullHeight,
  });
  slide.addText(`${getCurrentMonth()} ${new Date().getDate()}`, {
    // x: 4.803,
    // y: 4.145,
    x: 3.38,
    y: 3.07,
    w: 1.275,
    h: 0.397,
    fontSize: 18,
    color: '#cbcbcb',
    align: 'right',
  });
  slide.addText(`${new Date().getFullYear()}`, {
    // x: 5.118,
    // y: 4.366,
    x: 3.7,
    y: 3.307,
    w: 0.96,
    h: 0.5,
    fontSize: 20,
    color: '#cbcbcb',
    align: 'right',
  });
  const slide2 = pptx.addSlide();
  slide2.addImage({
    path: ppt.urls.noticia_del_dia_cover,
    w: ppt.fullWidth,
    h: ppt.fullHeight,
  });
  const slide3 = pptx.addSlide();
  slide3.addImage({
    path: ppt.urls.noticia_del_dia,
    w: ppt.fullWidth,
    h: ppt.fullHeight,
  });

  useEffect(() => {}, []);

  const handleDownload = () => {
    pptx.writeFile({ fileName: `noticias-${getFormattedDate()}.pptx` });
  };

  return (
    <Menu>
      <MenuItem
        icon={<GetAppIcon className="sidebar-icon" />}
        onClick={handleDownload}
      >
        Descargar
      </MenuItem>
    </Menu>
  );
};
