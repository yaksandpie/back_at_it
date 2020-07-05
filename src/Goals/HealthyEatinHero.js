import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 7;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function HealthyEatinHero() {
  const [healthyHeroes, setHealthyHeroes] = useLocalStorage('healthyEatinHero', []);

  const clickHandler = (index) => {
    if (healthyHeroes.length <= index) {
      setHealthyHeroes([...healthyHeroes, new Date()]);
    } else {
      setHealthyHeroes(healthyHeroes.slice(0, -1));
    }
  };

  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          key={`box${index}`}
          className={cn('box', { selected: index < healthyHeroes.length })}
          onClick={() => clickHandler(index)}
        >
          {healthyHeroes[index] && new Date(healthyHeroes[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default HealthyEatinHero;
