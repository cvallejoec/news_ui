export type New = {
  url: string;
  title: string;
  time: string;
  category: string;
  body: string[];
};

export type News = New[];

export enum CategoriesTypes {
  ECONOMIA = 'Economía',
  POLITICA = 'Política',
  INTERNACIONALES = 'Internacionales',
  CORONAVIRUS = 'Coronavirus',
  JUSTICIA = 'Justicia',
  SEGURIDAD = 'Seguridad',
  ACTUALIDAD = 'Actualidad',
  OPINION = 'Opinión',
}

export const categories = [
  CategoriesTypes.ECONOMIA,
  CategoriesTypes.POLITICA,
  CategoriesTypes.INTERNACIONALES,
  CategoriesTypes.CORONAVIRUS,
  CategoriesTypes.JUSTICIA,
  CategoriesTypes.SEGURIDAD,
  CategoriesTypes.ACTUALIDAD,
  CategoriesTypes.OPINION,
];

export type CategorizedNew = {
  newProvider: NewsProvider;
  newProviderCategory: string;
  category: CategoriesTypes;
  article: New;
};

export enum NewsProvider {
  EL_COMERCIO = 'El Comercio',
  LA_HORA = 'La Hora',
  EL_UNIVERSO = 'El Universo',
  EL_TELEGRAFO = 'El Telégrafo',
}
