import { createContext, useReducer, FC } from 'react';

export enum ActionType {
  open = 'OPEN-SIDEBAR',
  close = 'CLOSE-SIDEBAR',
}

export type ActionTypes =
  | {
      type: ActionType.open;
    }
  | {
      type: ActionType.close;
    };

export type SidebarType = {
  isOpen: boolean;
};

export type DispatchSidebar = (action: ActionTypes) => void;

const initialState: SidebarType = {
  isOpen: true,
};

export const SidebarContext = createContext<{
  sidebar: SidebarType;
  dispatch: DispatchSidebar;
}>({
  sidebar: initialState,
  dispatch: () => null,
});

const newsReducer = (state: SidebarType, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.open:
      return { ...state, isOpen: true };
    case ActionType.close:
      return { ...state, isOpen: false };
  }
};

export const SidebarProvider: FC = ({ children }) => {
  const [sidebar, dispatch] = useReducer(newsReducer, initialState);

  return (
    <SidebarContext.Provider value={{ sidebar, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
