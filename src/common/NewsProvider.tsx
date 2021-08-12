import { createContext, useReducer, FC } from 'react';

import {
  New,
  CategorizedNew,
  CategoriesTypes,
  NewsProvider as NewsProviderType,
} from '../types/new.type';

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
      newProvider: NewsProviderType;
      newProviderCategory: string;
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
  // newOfTheDay: {
  //   title: '',
  //   url: '',
  //   time: '',
  //   category: '',
  //   body: [],
  // },
  newOfTheDay: {} as New,
  categorizedNews: [],
};

export const NewsContext = createContext<{
  selectedNews: SelectedNewsType;
  dispatch: DispatchNew;
  getSelectedNewsNumber: (
    newProvider: NewsProviderType,
    newProviderCategory: string
  ) => number;
}>({
  selectedNews: defaultState,
  dispatch: () => null,
  getSelectedNewsNumber: () => 0,
});

const newsReducer = (
  state: SelectedNewsType,
  action: ActionTypes
): SelectedNewsType => {
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
            newProvider: action.newProvider,
            newProviderCategory: action.newProviderCategory,
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

  const getSelectedNewsNumber = (
    newProvider: NewsProviderType,
    newProviderCategory: string
  ): number => {
    const { categorizedNews } = selectedNews;
    return categorizedNews.filter(
      (categorizedNew) =>
        categorizedNew.newProvider === newProvider &&
        categorizedNew.newProviderCategory === newProviderCategory
    ).length;
  };

  return (
    <NewsContext.Provider
      value={{ selectedNews, dispatch, getSelectedNewsNumber }}
    >
      {children}
    </NewsContext.Provider>
  );
};
