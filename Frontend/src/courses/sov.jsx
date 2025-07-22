import React from 'react'
import SOVhero from '../components/SOVhero'
import KeyLearning from '../components/KeyLearning';
import CoursesSOV from '../components/coursesSOV';
import GameBanner from '../components/GameBanner';
import SOVtestimonials from '../components/SOVtestimonials';
import JourneySOVpage from '../components/journeySOVpage';

const sov = () => {
  return (
    <div>
        <SOVhero/>
        <KeyLearning/>
        <CoursesSOV/>
        <GameBanner/>
        <SOVtestimonials/>
        <JourneySOVpage/>
    </div>
  );
};
export default sov;
