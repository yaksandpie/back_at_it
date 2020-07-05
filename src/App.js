import React from 'react';

import WorkoutWarrior from './Goals/WorkoutWarrior';
import SleepSuperstar from './Goals/SleepSuperstar';
import CardioChampion from './Goals/CardioChampion';
import ChallengeCrusher from './Goals/ChallengeCrusher';
import HealthyEatinHero from './Goals/HealthyEatinHero';
import RecoveryRenegade from './Goals/RecoveryRenegade';

import './App.css';

import BackAtItPNG from './images/back_at_it.png';
import CardioChampionPNG from './images/cardio_champion.png';
import ChallengeCrusherPNG from './images/challenge_crusher.png';
import HealthyEatinHeroPNG from './images/healthy_eatin_hero.png';
import RecoveryRenegadePNG from './images/recovery_renegade.png';
import SleepSuperstarPNG from './images/sleep_superstar.png';
import WorkoutWarriorPNG from './images/workout_warrior.png';

function App() {
  return (
    <main>
      <header>
        <img src={BackAtItPNG} height='150' width='200' className="backAtIt-logo" alt="logo" />
        <h1><strong>BADGE</strong> Tracker</h1>
      </header>

      <section className='container'>
        <article className='row'>
          <img src={WorkoutWarriorPNG} className="badge" alt="logo" />
          <section className='content'>
            <h2>16 IN-STUDIO OR AT HOME WORKOUTS</h2>
            <WorkoutWarrior />
          </section>
        </article>

        <article className='row'>
          <img src={SleepSuperstarPNG} className="badge" alt="logo" />
          <section className='content'>
            <h2>CHANGE SLEEPING HABITS FOR A WEEK</h2>
            <SleepSuperstar />
          </section>
        </article>

        <article className='row'>
          <img src={CardioChampionPNG} className="badge" alt="logo" />
          <section className='content'>
            <h2>6 OUTDOOR CARDIO WORKOUTS</h2>
            <CardioChampion />
          </section>
        </article>

        <article className='row'>
          <img src={ChallengeCrusherPNG} className="badge" alt="logo" />
          <section className='content'>
            <h2>4 AT HOME CHALLENGES</h2>
            <ChallengeCrusher />
          </section>
        </article>

        <article className='row'>
          <img src={HealthyEatinHeroPNG} className="badge" alt="logo" />
          <section className='content'>
            <h2>EAT HEALTHY FOR A WEEK</h2>
            <HealthyEatinHero />
          </section>
        </article>

        <article className='row'>
          <img src={RecoveryRenegadePNG} className="badge" alt="logo" />
          <section className='content'>
            <h2>4 RECOVERY WORKOUTS</h2>
            <RecoveryRenegade />
          </section>
        </article>
      </section>
    </main>
  );
}

export default App;
