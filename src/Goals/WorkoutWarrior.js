import React from 'react';
import cn from 'classnames';

import useLocalStorage from '../utilities/useLocalStorage';


const DAYS_COUNT = 16;
const DATE_OPTIONS = { month: 'long', day: 'numeric' };

function WorkoutWarrior() {
  const [workouts, setWorkouts] = useLocalStorage('workoutWarrior', []);

  const clickHandler = (index) => {
    if (workouts.length <= index) {
      setWorkouts([...workouts, new Date()]);
    } else {
      setWorkouts(workouts.slice(0, -1));
    }
  };


  return (
    <article className='details'>
      {[...Array(DAYS_COUNT)].map((item, index) => (
        <div
          key={`box${index}`}
          className={cn('box', { selected: index < workouts.length })}
          onClick={() => clickHandler(index)}
        >
          {workouts[index] && new Date(workouts[index]).toLocaleDateString('en-US', DATE_OPTIONS)}
        </div>
      ))}
    </article>
  );
}

export default WorkoutWarrior;
