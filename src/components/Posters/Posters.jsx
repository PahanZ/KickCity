import React, { Fragment } from 'react';
import Poster from '../Poster/Poster';
import posters from '../../posters';
import Free from '../Free/Free';
import Coin from '../Coin/Coin';

export default () => (
  <Fragment>
    <section>
      {posters.map((element, i) => ((i <= 2) &&
      <Poster
        key={String(i)}
        src={element.poster}
        tittle={element.tittle}
        date={element.date}
        typeEvent={element.typeEvent}
        isFree={element.free ? <Free /> : false}
        isCoin={element.coins ? <Coin /> : false}
      />)) }
    </section>
    <section>
      {posters.map((element, i) => ((i > 2) && 
      <Poster
        key={String(i)}
        src={element.poster}
        tittle={element.tittle}
        date={element.date}
        typeEvent={element.typeEvent}
        isFree={element.free ? <Free /> : false}
        isCoin={element.coins ? <Coin /> : false}
      />)) }
    </section>
  </Fragment>
);
