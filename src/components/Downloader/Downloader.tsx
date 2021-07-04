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
import { CategoriesTypes, categories } from '../../types/new.type';
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

    categories.map((category) => {
      const categoryNews = getCategorizedNews(selectedNews, category);
      if (categoryNews.length === 0) return '';
      addSlide(getCategoryCover(category));

      let pairOfNews: SlideText[] = [];
      categoryNews.map((item, index) => {
        const { article } = item;

        const [title, body, url] = drawCategorizedNew(article, index);
        pairOfNews.push(title);
        pairOfNews.push(body);
        pairOfNews.push(url);

        if ((index + 1) % 2 === 1 && index + 1 === categoryNews.length) {
          // Is the last New and is on the LEFT
          addSlide(getCategoryBackground(category), pairOfNews);
        }

        if ((index + 1) % 2 === 0) {
          // Is the RIGHT New
          addSlide(getCategoryBackground(category), pairOfNews);
          // If is the RIGHT new I delete the pair of news and I
          // initialize it again.
          pairOfNews = [];
        }
        return '';
      });
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

const getCategoryCover = (category: CategoriesTypes) => {
  const { ppt } = config;

  switch (category) {
    case CategoriesTypes.ECONOMIA:
      return ppt.urls.portada_economia;
    case CategoriesTypes.POLITICA:
      return ppt.urls.portada_politica;
    case CategoriesTypes.INTERNACIONALES:
      return ppt.urls.portada_internacionales;
    case CategoriesTypes.CORONAVIRUS:
      return ppt.urls.portada_coronavirus;
    case CategoriesTypes.JUSTICIA:
      return ppt.urls.portada_justicia;
    case CategoriesTypes.SEGURIDAD:
      return ppt.urls.portada_seguridad;
    case CategoriesTypes.ACTUALIDAD:
      return ppt.urls.portada_actualidad;
    case CategoriesTypes.OPINION:
      return ppt.urls.portada_opinion;
    default:
      return '';
  }
};

const getCategoryBackground = (category: CategoriesTypes) => {
  const { ppt } = config;

  switch (category) {
    case CategoriesTypes.ECONOMIA:
      return ppt.urls.economia_contenido;
    case CategoriesTypes.POLITICA:
      return ppt.urls.politica_contenido;
    case CategoriesTypes.INTERNACIONALES:
      return ppt.urls.internacionales_contenido;
    case CategoriesTypes.CORONAVIRUS:
      return ppt.urls.contenido_coronavirus;
    case CategoriesTypes.JUSTICIA:
      return ppt.urls.contenido_justicia;
    case CategoriesTypes.SEGURIDAD:
      return ppt.urls.seguridad_contenido;
    case CategoriesTypes.ACTUALIDAD:
      return ppt.urls.actualidad_contenido;
    case CategoriesTypes.OPINION:
      return ppt.urls.contenido_opinion;
    default:
      return '';
  }
};
