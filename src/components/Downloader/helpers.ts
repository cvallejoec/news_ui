import { SlideText, TEXT_HALIGN } from './reducer';
import { SelectedNewsType } from '../../common/NewsProvider';
import { getCurrentMonth } from '../../helpers/getMonthName';
import { CategoriesTypes } from '../../types/new.type';

export const getCover = () => {
  const monthAndDate: SlideText = {
    text: `${getCurrentMonth()} ${new Date().getDate()}`,
    position: {
      x: 3.38,
      y: 3.07,
    },
    size: {
      w: 1.275,
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
    fontSize: 20,
    color: '#0692f0',
    align: TEXT_HALIGN.right,
    bold: true,
    charSpacing: 0,
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
    fontSize: 7,
    color: '#000000',
    align: TEXT_HALIGN.justify,
    lineSpacing: 0,
    charSpacing: 0,
  };

  const url: SlideText = {
    text: `${newOfTheDay.url}`,
    position: {
      x: 4.17,
      y: 4.8,
    },
    size: {
      w: 7.15,
      h: 0.18,
    },
    fontSize: 7,
    color: '#5c5c5c',
    align: TEXT_HALIGN.left,
  };

  return [title, body, url];
};

export const getCategorizedNews = (
  selectedNews: SelectedNewsType,
  category: CategoriesTypes
) => {
  type Article = {
    title: SlideText;
    body: SlideText;
    url: SlideText;
  };

  const { categorizedNews } = selectedNews;

  const filteredNews = categorizedNews.filter(
    (item) => item.category === category
  );

  const articles: SlideText[] = [];

  filteredNews.map(({ article }) => {
    const title: SlideText = {
      text: article.title,
      position: {
        x: 0.19,
        y: 0.87,
      },
      size: {
        w: 8.74,
        h: 1.16,
      },
      fontSize: 20,
      color: '#0692f0',
      align: TEXT_HALIGN.right,
      bold: true,
      charSpacing: 0,
    };

    const body: SlideText = {
      text: parseParagraphs(article.body),
      position: {
        x: 4.07,
        y: 2.04,
      },
      size: {
        w: 5.35,
        h: 2.51,
      },
      fontSize: 7,
      color: '#000000',
      align: TEXT_HALIGN.justify,
      lineSpacing: 0,
      charSpacing: 0,
    };

    const url: SlideText = {
      text: `${article.url}`,
      position: {
        x: 4.17,
        y: 4.8,
      },
      size: {
        w: 7.15,
        h: 0.18,
      },
      fontSize: 7,
      color: '#5c5c5c',
      align: TEXT_HALIGN.left,
    };

    return articles.push(title, body, url);
  });

  return articles;
};

const parseParagraphs = (body: string[]) => {
  let completeParagraph = '';
  body.map((p) => {
    if (completeParagraph.length > 1600) return '';
    return (completeParagraph = completeParagraph + p + '\n\n');
  });
  return completeParagraph;
};
