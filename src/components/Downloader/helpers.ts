import { SlideText, TEXT_HALIGN } from './reducer';
import { SelectedNewsType } from '../../common/NewsProvider';
import { getCurrentMonth } from '../../helpers/getMonthName';
import { CategoriesTypes, New } from '../../types/new.type';

export const getCover = () => {
  const monthAndDate: SlideText = {
    text: `${getCurrentMonth()} ${new Date().getDate()}`,
    position: {
      x: 2.75,
      y: 3.07,
    },
    size: {
      w: 1.89,
      h: 0.397,
    },
    fontSize: 18,
    color: '#cbcbcb',
    align: TEXT_HALIGN.right,
  };
  const year: SlideText = {
    text: `${new Date().getFullYear()}`,
    position: {
      x: 3.7,
      y: 3.307,
    },
    size: {
      w: 0.96,
      h: 0.5,
    },
    fontSize: 20,
    color: '#cbcbcb',
    align: TEXT_HALIGN.right,
  };
  return [monthAndDate, year];
};

export const getNewOfTheDay = (selectedNews: SelectedNewsType) => {
  const { newOfTheDay } = selectedNews;

  const title: SlideText = {
    text: `${newOfTheDay.title}`,
    position: {
      x: 0.19,
      y: 0.87,
    },
    size: {
      w: 8.74,
      h: 1.16,
    },
    fontSize: 16,
    color: '#0692f0',
    align: TEXT_HALIGN.right,
    bold: true,
    charSpacing: 0,
    fontFace: 'Helvetica',
  };

  const body: SlideText = {
    text: parseParagraphs(newOfTheDay.body),
    position: {
      x: 4.07,
      y: 2.04,
    },
    size: {
      w: 5.35,
      h: 2.51,
    },
    fontSize: 8,
    color: '#000000',
    align: TEXT_HALIGN.justify,
    lineSpacing: 0,
    charSpacing: 0,
    fontFace: 'Helvetica',
  };

  const url: SlideText = {
    text: `${newOfTheDay.url}`,
    position: {
      x: 4.09,
      y: 4.64,
    },
    size: {
      w: 5.35,
      h: 0.47,
    },
    fontSize: 8,
    color: '#3771C7',
    align: TEXT_HALIGN.left,
  };

  return [title, body, url];
};

export const getCategorizedNews = (
  selectedNews: SelectedNewsType,
  category: CategoriesTypes
) => {
  const { categorizedNews } = selectedNews;

  const filteredNews = categorizedNews.filter(
    (item) => item.category === category
  );

  return filteredNews;
};

export const drawCategorizedNew = (categorizedNew: New, index: number) => {
  const title: SlideText = {
    text: categorizedNew.title,
    position: {
      x: (index + 1) % 2 === 1 ? 0.62 : 5.43,
      y: 0.98,
    },
    size: {
      w: 3.85,
      h: 0.72,
    },
    fontSize: 10,
    color: '#0692f0',
    align: TEXT_HALIGN.left,
    bold: true,
    charSpacing: 0,
  };

  const body: SlideText = {
    text: parseParagraphs(categorizedNew.body),
    position: {
      x: (index + 1) % 2 === 1 ? 0.47 : 5.2,
      y: 1.65,
    },
    size: {
      w: 3.54,
      h: 2.82,
    },
    fontSize: 6,
    color: '#000000',
    align: TEXT_HALIGN.justify,
    lineSpacing: 0,
    charSpacing: 0,
  };

  const url: SlideText = {
    text: `${categorizedNew.url}`,
    position: {
      x: (index + 1) % 2 === 1 ? 0.55 : 5.27,
      y: 4.8,
    },
    size: {
      w: 3.46,
      h: 0.31,
    },
    fontSize: 8,
    color: '#3771C7',
    align: TEXT_HALIGN.left,
  };

  return [title, body, url];
};

const parseParagraphs = (body: string[]) => {
  let completeParagraph = '';
  body.map((p) => {
    if (completeParagraph.length > 1500) return '';
    return (completeParagraph = completeParagraph + p + '\n\n');
  });
  // Delete the last blank spaces on the end
  return completeParagraph.slice(0, -2);
};
