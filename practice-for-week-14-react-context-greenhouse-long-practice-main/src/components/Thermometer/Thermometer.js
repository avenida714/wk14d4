import { useContext, useState } from "react";
import ReactSlider from "react-slider";
import './Thermometer.css';
import useClimateContext, { ClimateContext } from '../../context/ClimateContext'

function Thermometer() {
  const { temperature, setTemperature } = useContext(ClimateContext);
  const [clickTemp, setClickTemp] = useState(temperature);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {`${clickTemp}`}°F</div>
      <ReactSlider
        value={clickTemp}
        onAfterChange={(value) => { setClickTemp(value) }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
