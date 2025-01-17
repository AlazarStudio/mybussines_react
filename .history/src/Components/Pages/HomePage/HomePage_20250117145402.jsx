import React from 'react';
import classes from './HomePage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container1 from '../../ui/HomePage/Container1/Container1';
import Container2 from '../../ui/HomePage/Container2/Container2';
import Container3 from '../../ui/HomePage/Container3/Container3';
import Container4 from '../../ui/HomePage/Container4/Container4';
import Container5 from '../../ui/HomePage/Container5/Container5';
import Container6 from '../../ui/HomePage/Container6/Container6';

function HomePage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <Container1 /> {/* Свайпер центры поддержки */}
          <Container2 /> {/* Квардатики центры поодержки */}
          <Container3 /> {/* Меры поддержки */}
          <Container4 /> {/* СВО */}
          <Container5 /> {/* Последние новости */}
          <Container6 /> {/* Последние новости */}
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default HomePage;
