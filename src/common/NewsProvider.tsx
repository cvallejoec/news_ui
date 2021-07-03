import { createContext, useReducer, FC } from 'react';

import { New, CategorizedNew, CategoriesTypes } from '../types/new.type';

export enum ActionType {
  selectNewOfTheDay = 'SELECT-NEW-OF-THE-DAY',
  removeNewOfTheDay = 'REMOVE-PRINCIPAL-NEW',
  addCategorizedNew = 'ADD-CATEGORIZED-NEW',
  removeCategorizedNew = 'REMOVE-CATEGORIZED-NEW',
}

export type ActionTypes =
  | {
      type: ActionType.selectNewOfTheDay;
      payload: New;
    }
  | {
      type: ActionType.removeNewOfTheDay;
    }
  | {
      type: ActionType.addCategorizedNew;
      category: CategoriesTypes;
      article: New;
    }
  | {
      type: ActionType.removeCategorizedNew;
      url: string;
    };

export type SelectedNewsType = {
  newOfTheDay: New;
  categorizedNews: CategorizedNew[];
};

export type DispatchNew = (action: ActionTypes) => void;

const defaultState: SelectedNewsType = {
  newOfTheDay: {
    title: '',
    url: '',
    time: '',
    category: '',
    body: [],
  },
  categorizedNews: [],
};

export const NewsContext = createContext<{
  selectedNews: SelectedNewsType;
  dispatch: DispatchNew;
}>({
  selectedNews: defaultState,
  dispatch: () => null,
});

const newsReducer = (state: SelectedNewsType, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.selectNewOfTheDay:
      return { ...state, newOfTheDay: action.payload };
    case ActionType.removeNewOfTheDay:
      return { ...state, newOfTheDay: defaultState.newOfTheDay };
    case ActionType.addCategorizedNew:
      return {
        ...state,
        categorizedNews: [
          ...state.categorizedNews,
          {
            category: action.category,
            article: action.article,
          },
        ],
      };
    case ActionType.removeCategorizedNew:
      return {
        ...state,
        categorizedNews: state.categorizedNews.filter(
          (item) => item.article.url !== action.url
        ),
      };
    default:
      return state;
  }
};

export const NewsProvider: FC = ({ children }) => {
  const [selectedNews, dispatch] = useReducer(newsReducer, defaultState);
  console.log(selectedNews);
  return (
    <NewsContext.Provider value={{ selectedNews, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};
