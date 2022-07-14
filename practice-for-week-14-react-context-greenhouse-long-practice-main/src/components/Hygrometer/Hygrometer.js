import ReactSlider from "react-slider";
import { useState, useContext } from "react";
import "./Hygrometer.css";
import useClimateContext, { ClimateContext } from '../../context/ClimateContext'


function Hygrometer() {

  const {humidity, setHumidity} = useContext(ClimateContext);

  const [clickHumidity, setClickHumidity] = useState(humidity);


  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {`${clickHumidity}`}%</div>
      <ReactSlider
        value={clickHumidity}
        onAfterChange={(value) => {setClickHumidity(value)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
