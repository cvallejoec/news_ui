import { createContext, useReducer, FC } from 'react';

import { New } from '../types/new.type';

export enum ActionType {
  selectNewOfTheDay = 'SELECT-NEW-OF-THE-DAY',
  removeNewOfTheDay = 'REMOVE-PRINCIPAL-NEW',
}

export type ActionTypes =
  | {
      type: ActionType.selectNewOfTheDay;
      payload: New;
    }
  | {
      type: ActionType.removeNewOfTheDay;
    };

export type SelectedNewsType = {
  newOfTheDay: New;
};

export type DispatchNew = (action: ActionTypes) => void;

const defaultState: SelectedNewsType = {
  newOfTheDay: {
    title: '',
    url: '',
    body: [],
  },
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
  }
};

export const NewsProvider: FC = ({ children }) => {
  const [selectedNews, dispatch] = useReducer(newsReducer, defaultState);

  return (
    <NewsContext.Provider value={{ selectedNews, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};
