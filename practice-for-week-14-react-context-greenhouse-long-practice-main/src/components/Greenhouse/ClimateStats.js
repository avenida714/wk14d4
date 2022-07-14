import { useContext } from 'react';
import './ClimateStats.css';

import Thermometer from '../Thermometer/Thermometer';

import Hygrometer from '../Hygrometer/Hygrometer';


import { ClimateContext } from '../../context/ClimateContext';



function ClimateStats() {

  const thermoObj = Thermometer()
  const hygroObj = Hygrometer()

  // console.log("this is the thermo", thermoObj)

  const {clickTemp} = useContext(ClimateContext);



  const temp = thermoObj.props.children[2].props.value
  const humid = hygroObj.value

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {`${clickTemp}`}°F
      </div>
      <div className="humidity">
        Humidity {`${humid}`}%
      </div>
    </div>
  )
}

export default ClimateStats;
