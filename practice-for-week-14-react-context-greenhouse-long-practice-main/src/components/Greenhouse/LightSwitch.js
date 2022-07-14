import { useContext } from 'react';
import './LightSwitch.css';
import { ThemeContext } from '../../../src/context/ThemeContext';


function LightSwitch() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={() => { setThemeName('day') }}>DAY</div>
      <div className="off" onClick={() => { setThemeName('night') }}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
