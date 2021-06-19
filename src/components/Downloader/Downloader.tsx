import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

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
    <ListItem button onClick={handleDownload}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={'Descargar'} />
    </ListItem>
  );
};
