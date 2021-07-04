import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { config } from '../../config';
import { useSelectedNews } from '../../hooks/useSelectedNews';
import { getFormattedDate } from '../../helpers/getFormattedDate';
import { usePpt } from './reducer';
import {
  getCover,
  getNewOfTheDay,
  getCategorizedNews,
  drawCategorizedNew,
} from './helpers';
import { CategoriesTypes } from '../../types/new.type';
import { SlideText } from './reducer';

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

    const economiaNews = getCategorizedNews(
      selectedNews,
      CategoriesTypes.ECONOMIA
    );
    addSlide(ppt.urls.portada_economia);
    let pairOfNews: SlideText[] = [];
    economiaNews.map((item, index) => {
      const { article } = item;

      const [title, body, url] = drawCategorizedNew(article, index);
      pairOfNews.push(title);
      pairOfNews.push(body);
      pairOfNews.push(url);

      if ((index + 1) % 2 === 1 && index + 1 === economiaNews.length) {
        // Is the last New and is on the LEFT
        addSlide(ppt.urls.economia_contenido, pairOfNews);
      }

      if ((index + 1) % 2 === 0) {
        // Is the RIGHT New
        addSlide(ppt.urls.economia_contenido, pairOfNews);
        pairOfNews = [];
      }
      return '';
    });

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
