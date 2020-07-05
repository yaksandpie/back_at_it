import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 4;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function ChallengeCrusher() {
  const [crushers, setCrushers] = useLocalStorage('challengeCrusher', []);

  const clickHandler = (index) => {
    if (crushers.length <= index) {
      setCrushers([...crushers, new Date()]);
    } else {
      setCrushers(crushers.slice(0, -1));
    }
  };

  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          key={`box${index}`}
          className={cn('box', { selected: index < crushers.length })}
          onClick={() => clickHandler(index)}
        >
          {crushers[index] && new Date(crushers[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default ChallengeCrusher;
