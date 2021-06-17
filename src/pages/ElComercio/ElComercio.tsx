import React, { useEffect } from 'react';
import pptxgen from 'pptxgenjs';

import { config } from '../../config';
import { useSpider } from '../../hooks/useSpider';
import { Articles } from '../../components/Articles/Articles';
import { getMonthName } from '../../helpers/getMonthName';

const pptx = new pptxgen();

// Mes y día:   12.20 x 10.53   3.24 x 1.01
// Año:         13.00 x 11.09   2.44 x 1.27

// Título       10.68 x 3.96    19.52 x 2.11
// Cuerpo       13.67 x 7.74    18.18 x 8.24
// Info         19.92 x 15.93   18.18 x 0.47

export const ElComercio = () => {
  const { spiders, ppt } = config;
  const { data, loading } = useSpider(spiders.el_comercio);

  const monthName = getMonthName(new Date().getMonth() + 1);

  const slide = pptx.addSlide();
  slide.addImage({
    path: 'https://1.bp.blogspot.com/-Z6pKoqkjNtA/YMlF42mqzFI/AAAAAAAAvdw/sqDDQeCURgo2KcHsbFlqrnzavzHy08VoACLcBGAsYHQ/s16000/diapo-1.jpg',
    w: ppt.fullWidth,
    h: ppt.fullHeight,
  });
  slide.addText(`${monthName} ${new Date().getDate()}`, {
    // x: 4.803,
    // y: 4.145,
    x: 3.38,
    y: 3.07,
    w: 1.275,
    h: 0.397,
    fontSize: 18,
    color: '#cbcbcb',
    align: 'right',
  });
  slide.addText(`${new Date().getFullYear()}`, {
    // x: 5.118,
    // y: 4.366,
    x: 3.7,
    y: 3.307,
    w: 0.96,
    h: 0.5,
    fontSize: 20,
    color: '#cbcbcb',
    align: 'right',
  });
  const slide2 = pptx.addSlide();
  slide2.addImage({
    path: 'https://1.bp.blogspot.com/-J7kFraoPruA/YMlF47-hb6I/AAAAAAAAvd4/sbWNih0-4QI9MEjV_jkMqdit4bKMApMCgCLcBGAsYHQ/s16000/diapo-2.jpg',
    w: ppt.fullWidth,
    h: ppt.fullHeight,
  });
  const slide3 = pptx.addSlide();
  slide3.addImage({
    path: 'https://1.bp.blogspot.com/-DUEsSGynrDU/YMlF43wyB7I/AAAAAAAAvd0/V4Z1pNG-XKU6Vo3USIZR34KYIi3FJZBhQCLcBGAsYHQ/s16000/diapo-3.jpg',
    w: ppt.fullWidth,
    h: ppt.fullHeight,
  });

  useEffect(() => {
    // pptx.writeFile({ fileName: 'test.pptx' });
  }, []);

  return (
    <div>
      <h1>El Comercio</h1>
      {loading && <p>Cargando...</p>}
      {data.length > 0 && <Articles news={data} />}
    </div>
  );
};
