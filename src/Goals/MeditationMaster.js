import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 7;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function MeditationMaster() {
  const [meditationMaster, setMeditationMaster] = useLocalStorage('MeditationMaster', []);

  const clickHandler = (index) => {
    if (meditationMaster.length <= index) {
      setMeditationMaster([...meditationMaster, new Date()]);
    } else {
      setMeditationMaster(meditationMaster.slice(0, -1));
    }
  };

  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          key={`box${index}`}
          className={cn('box', { selected: index < meditationMaster.length })}
          onClick={() => clickHandler(index)}
        >
          {meditationMaster[index] && new Date(meditationMaster[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default MeditationMaster;
