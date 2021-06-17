import React from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import pptxgen from 'pptxgenjs';
import GetAppIcon from '@material-ui/icons/GetApp';

import { config } from '../../config';
import { useSelectedNews } from '../../hooks/useSelectedNews';
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
  const { selectedNews } = useSelectedNews();
  const { newOfTheDay } = selectedNews;

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
  slide3.addText(`${newOfTheDay.title}`, {
    x: 2.47,
    y: 1.29,
    w: 6.5,
    h: 0.83,
    fontSize: 30,
    color: '#0692f0',
    align: 'right',
  });
  slide3.addText(
    `${newOfTheDay.body.map((p, i) => {
      console.log(p);
      if (i >= 5) return;
      return `
      ${p}
      `;
    })}`,
    {
      x: 4.07,
      y: 2.28,
      w: 5.35,
      h: 2.25,
      fontSize: 8,
      color: '#000000',
      align: 'justify',
    }
  );
  slide3.addText(`${newOfTheDay.url}`, {
    x: 4.17,
    y: 4.8,
    w: 7.15,
    h: 0.18,
    fontSize: 7,
    color: '#5c5c5c',
    align: 'left',
  });

  const handleDownload = () => {
    pptx.writeFile({
      fileName: `RESUMEN EJECUTIVO DE NOTICIAS - ${getFormattedDate()}.pptx`,
    });
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
