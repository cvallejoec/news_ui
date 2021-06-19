import React from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import GetAppIcon from '@material-ui/icons/GetApp';

import { config } from '../../config';
import { useSelectedNews } from '../../hooks/useSelectedNews';
import { getFormattedDate } from '../../helpers/getFormattedDate';
import { usePpt } from './reducer';
import { getCover, getNewOfTheDay } from './helpers';

export const Downloader = () => {
  const { addSlide, downloadPpt } = usePpt();
  const { ppt } = config;
  const { selectedNews } = useSelectedNews();

  const handleDownload = () => {
    const [monthAndDate, year] = getCover();
    addSlide(ppt.urls.portada, [monthAndDate, year]);

    addSlide(ppt.urls.noticia_del_dia_cover);

    const [title, body, url] = getNewOfTheDay(selectedNews);
    addSlide(ppt.urls.noticia_del_dia, [title, body, url]);

    const fileName = `RESUMEN EJECUTIVO DE NOTICIAS - ${getFormattedDate()}`;
    downloadPpt(fileName);
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
