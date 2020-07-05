import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 4;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function RecoveryRenegade() {
  const [recoveries, setRecoveries] = useLocalStorage('recoveryRenegade', []);

  const clickHandler = (index) => {
    if (recoveries.length <= index) {
      setRecoveries([...recoveries, new Date()]);
    } else {
      setRecoveries(recoveries.slice(0, -1));
    }
  };

  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          key={`box${index}`}
          className={cn('box', { selected: index < recoveries.length })}
          onClick={() => clickHandler(index)}
        >
          {recoveries[index] && new Date(recoveries[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default RecoveryRenegade;
