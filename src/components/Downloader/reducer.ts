import { useReducer } from 'react';
import pptxgen from 'pptxgenjs';

import { config } from '../../config';

export enum ActionType {
  initialize = 'INITILIZE',
  generating = 'GENERATING',
  generated = 'GENERATED',
  errorGenerating = 'ERROR-GENERATING',
  addSlide = 'ADD-SLIDE',
}

export type ActionTypes =
  | {
      type: ActionType.initialize;
      payload: {
        newPpt: pptxgen;
      };
    }
  | {
      type: ActionType.generating;
    }
  | {
      type: ActionType.generated;
    }
  | {
      type: ActionType.errorGenerating;
    }
  | {
      type: ActionType.addSlide;
      payload: 'string';
    };

export type DownloaderType = {
  status: string;
  loading: boolean;
  error: string | null;
  pptx: pptxgen;
};

export enum TEXT_HALIGN {
  'left' = 'left',
  'center' = 'center',
  'right' = 'right',
  'justify' = 'justify',
}

export type SlideText = {
  text: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    w: number;
    h: number;
  };
  fontSize?: number;
  color?: string;
  align?: TEXT_HALIGN;
  bold?: boolean;
  lineSpacing?: number;
  charSpacing?: number;
};

export type SlideTexts = SlideText[];

const pptx = new pptxgen();
const initialState: DownloaderType = {
  status: '',
  loading: false,
  error: null,
  pptx,
};

const reducer = (state: DownloaderType, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.initialize:
      return { ...state, pptx: action.payload.newPpt };
    case ActionType.generating:
      return {
        ...state,
        loading: true,
      };
    case ActionType.generated:
      return {
        ...state,
        loading: false,
        status: 'success',
      };
    case ActionType.errorGenerating:
      return {
        ...state,
        loading: false,
        status: 'error',
      };
    case ActionType.addSlide:
      return state;
    default:
      return state;
  }
};

export const usePpt = () => {
  const { ppt } = config;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pptx } = state;

  const downloadPpt = (fileName: string) => {
    dispatch({
      type: ActionType.generating,
    });
    pptx
      .writeFile({ fileName: `${fileName}.pptx` })
      .then((createdFile) => {
        console.log(`Presentación creada. ${createdFile}`);
        dispatch({
          type: ActionType.generated,
        });
        dispatch({
          type: ActionType.initialize,
          payload: {
            newPpt: new pptxgen(),
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addSlide = (background: string, slideTexts?: SlideTexts) => {
    const slide = pptx.addSlide();
    slide.addImage({
      path: background,
      w: ppt.fullWidth,
      h: ppt.fullHeight,
    });
    if (slideTexts) {
      slideTexts.map((slideText) => {
        const { x, y } = slideText.position;
        const { w, h } = slideText.size;
        const { fontSize, color, align, bold, lineSpacing, charSpacing } =
          slideText;
        return slide.addText(slideText.text, {
          x,
          y,
          w,
          h,
          fontSize,
          color,
          align,
          bold,
          lineSpacing,
          charSpacing,
        });
      });
    }
  };

  return {
    addSlide,
    downloadPpt,
  };
};
