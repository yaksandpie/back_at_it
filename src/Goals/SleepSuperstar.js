import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 8;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function SleepSuperstar() {
  const [sleeps, setSleeps] = useLocalStorage('sleepSuperstar', []);

  const clickHandler = (index) => {
    if (sleeps.length <= index) {
      setSleeps([...sleeps, new Date()]);
    } else {
      setSleeps(sleeps.slice(0, -1));
    }
  };

  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          className={cn('box', { selected: index < sleeps.length })}
          onClick={() => clickHandler(index)}
        >
          {sleeps[index] && new Date(sleeps[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default SleepSuperstar;
