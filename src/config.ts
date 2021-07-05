export const config = {
  backend: {
    url_start: process.env.REACT_APP_BACKEND_API_START,
    url_end: process.env.REACT_APP_BACKEND_API_END,
  },
  spiders: {
    el_comercio: 'el_comercio',
    la_hora: 'la_hora',
    el_universo: 'el_universo',
    el_telegrafo_actualidad: 'el_telegrafo_actualidad',
    el_telegrafo_empresariales: 'el_telegrafo_empresariales',
    el_telegrafo_justicia: 'el_telegrafo_justicia',
    el_telegrafo_mundo: 'el_telegrafo_mundo',
    el_telegrafo_sociedad: 'el_telegrafo_sociedad',
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
      portada_actualidad:
        'https://1.bp.blogspot.com/-ks9ur7VOMtQ/YOCnuQPayeI/AAAAAAAAvvI/5NXv1Jcdq8EnN_L4xeaUcwAXwKyaN-kpQCLcBGAsYHQ/s2001/portada-actualidad.jpg',
      actualidad_contenido:
        'https://1.bp.blogspot.com/-vP7jmqsKv3w/YOCntSwUknI/AAAAAAAAvuw/3V89PkFKN4EXtE07ArA9kgExWNZfERcEQCLcBGAsYHQ/s2001/actualidad-contenido.jpg',
      portada_coronavirus:
        'https://1.bp.blogspot.com/-oxOEsJoxx1g/YOCnugpvY6I/AAAAAAAAvvM/dq72ZLhlFzI44JXjJ_J6GWsxw3U-5yI3QCLcBGAsYHQ/s2001/portada-coronavirus.jpg',
      contenido_coronavirus:
        'https://1.bp.blogspot.com/-UwJjEMmR6Sw/YOCntBR_BVI/AAAAAAAAvus/HR5lKpXXHVw79OFwBwDrVTFpkmbJus5ywCLcBGAsYHQ/s2001/coronavirus-contenido.jpg',
      portada_economia:
        'https://1.bp.blogspot.com/-vkS1TWfAhLc/YOCnuvlVo8I/AAAAAAAAvvQ/-PIp6KMC9joFgoHl42OzqZx1xMDPvfyhgCLcBGAsYHQ/s2001/portada-economia.jpg',
      economia_contenido:
        'https://1.bp.blogspot.com/-Cwe575brVIA/YOCntS_YN2I/AAAAAAAAvu0/Aqt6ELIfC7cLDpd3Oe4lDnbAFmNz3S-iACLcBGAsYHQ/s2001/economia-contenido.jpg',
      portada_internacionales:
        'https://1.bp.blogspot.com/-ApcPsjyP-Ys/YOCnvGaLGrI/AAAAAAAAvvU/32uQ02wSd74XmHrq4elkzquo-tWRwaHvwCLcBGAsYHQ/s2001/portada-internacionales.jpg',
      internacionales_contenido:
        'https://1.bp.blogspot.com/-3cWBNFK-oJ0/YOCntyoCt9I/AAAAAAAAvu4/BpHFq3pHB7MskgQOtbVM-4Rlg4wGKIWxwCLcBGAsYHQ/s2001/internacionales-contenido.jpg',
      portada_justicia:
        'https://1.bp.blogspot.com/-WXVJ5dcDOME/YOCnvpjLmDI/AAAAAAAAvvY/EWd-mrgaXo8oSfKTyJIqr79avuYevMJ2wCLcBGAsYHQ/s2001/portada-justicia.jpg',
      contenido_justicia:
        'https://1.bp.blogspot.com/-K-4CPHuj1pk/YOCnuGGYZ8I/AAAAAAAAvu8/ytl1KQF08eAfSHpBrbnLaXHdRd2H-s-6gCLcBGAsYHQ/s2001/justicia-contenido.jpg',
      portada_opinion:
        'https://1.bp.blogspot.com/-gL07xSFkO9s/YOCnwJHJ4fI/AAAAAAAAvvc/BSyMddUSP9M-FeWpwsOXkYJFX7chVkV-wCLcBGAsYHQ/s2001/portada-opinion.jpg',
      contenido_opinion:
        'https://1.bp.blogspot.com/-c4WQa0WQcRY/YOCnuPvwmYI/AAAAAAAAvvA/ADbH7y2J8VQWOd0DQ-YN4xje46nMiaE-wCLcBGAsYHQ/s2001/opinion-contenido.jpg',
      portada_politica:
        'https://1.bp.blogspot.com/-7QA_Clw_OrU/YOCnwew-9mI/AAAAAAAAvvg/eeGszgFtvN0iEwehFuQU0iDApB_sWSsuwCLcBGAsYHQ/s2001/portada-politica.jpg',
      politica_contenido:
        'https://1.bp.blogspot.com/-5DKlHq3qqt8/YOCnuUAcxkI/AAAAAAAAvvE/xbEjVeyoKJwtRMcaMsn4GbxES6g2ioZoQCLcBGAsYHQ/s2001/politica-contenido.jpg',
      portada_seguridad:
        'https://1.bp.blogspot.com/-UFlPmwmqZP8/YOCnwkRcdUI/AAAAAAAAvvk/j_gbqOIMJ-Q_EUvbI9wI38QrOATHz3a2gCLcBGAsYHQ/s2001/portada-seguridad.jpg',
      seguridad_contenido:
        'https://1.bp.blogspot.com/-2GsiUH8l2SE/YOCnw9dlsyI/AAAAAAAAvvo/sA-FYLl_fMURx6rSuJpGgU9Xoi_TYfD9gCLcBGAsYHQ/s2001/seguridad-contenido.jpg',
    },
  },
  styles: {
    drawer: {
      width: 200,
    },
  },
};
