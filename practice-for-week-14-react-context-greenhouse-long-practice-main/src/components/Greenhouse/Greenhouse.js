import { useContext } from 'react';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { ThemeContext } from '../../../src/context/ThemeContext'


import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';


function Greenhouse() {
  const { themeName, setThemeName } = useContext(ThemeContext);
  let image;
  if (themeName === 'day') image = dayImage;
  else image = nightImage;
  return (
    <section>
      <img className='greenhouse-img'
        src={image}
        alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;

// src={ themeName === 'day' ? dayImage : nightImage }
