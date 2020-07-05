import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 6;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function CardioChampion() {
  const [cardios, setCardios] = useLocalStorage('cardioChampion', []);

  const clickHandler = (index) => {
    if (cardios.length <= index) {
      setCardios([...cardios, new Date()]);
    } else {
      setCardios(cardios.slice(0, -1));
    }
  };

  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          className={cn('box', { selected: index < cardios.length })}
          onClick={() => clickHandler(index)}
        >
          {cardios[index] && new Date(cardios[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default CardioChampion;
