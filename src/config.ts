export const config = {
  backend: {
    url_start: process.env.REACT_APP_BACKEND_API_START,
    url_end: process.env.REACT_APP_BACKEND_API_END,
  },
  spiders: {
    el_comercio: 'el_comercio',
  },
  ppt: {
    fullWidth: 10.0,
    fullHeight: 5.625,
    urls: {
      portada:
        'https://1.bp.blogspot.com/-Z6pKoqkjNtA/YMlF42mqzFI/AAAAAAAAvdw/sqDDQeCURgo2KcHsbFlqrnzavzHy08VoACLcBGAsYHQ/s16000/diapo-1.jpg',
      noticia_del_dia_cover:
        'https://1.bp.blogspot.com/-J7kFraoPruA/YMlF47-hb6I/AAAAAAAAvd4/sbWNih0-4QI9MEjV_jkMqdit4bKMApMCgCLcBGAsYHQ/s16000/diapo-2.jpg',
      noticia_del_dia:
        'https://1.bp.blogspot.com/-DUEsSGynrDU/YMlF43wyB7I/AAAAAAAAvd0/V4Z1pNG-XKU6Vo3USIZR34KYIi3FJZBhQCLcBGAsYHQ/s16000/diapo-3.jpg',
    },
  },
  styles: {
    drawer: {
      width: 200,
    },
  },
};
