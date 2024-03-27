import './SoftwareSimulationData.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  startingPositionState,
  currentMotorTorqueState,
  ballReleasePositionState,
} from '../../state/softwareSimulationState';
import { maxMotorTorqueState } from '../../state/hardwareSimulationState';

function SoftwareSimulationData() {
  const [startingPosition, setStartingPosition] = useRecoilState(
    startingPositionState
  );
  const [currentMotorTorque, setCurrentMotorTorque] = useRecoilState(
    currentMotorTorqueState
  );
  const [ballReleasePosition, setBallReleasePosition] = useRecoilState(
    ballReleasePositionState
  );

  const maxMotorTorque = useRecoilValue(maxMotorTorqueState);

  return (
    <div className="software-simulation-data">
      <h2 className="section-title">Software Simulation Data</h2>
      <label>
        Starting Position (radians as x*pi/6):
        <input
          type="number"
          className="data-input"
          value={startingPosition}
          min={0}
          onChange={(e) => setStartingPosition(Number(e.target.value))}
        />
      </label>
      <label>
        Current Motor Torque (Nm):
        <input
          type="number"
          className="data-input"
          value={currentMotorTorque}
          max={maxMotorTorque}
          min={0}
          onChange={(e) => setCurrentMotorTorque(Number(e.target.value))}
        />
      </label>
      <label>
        Ball Release Position (radians as x*pi/6):
        <input
          type="number"
          className="data-input"
          value={ballReleasePosition}
          min={0}
          onChange={(e) => setBallReleasePosition(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default SoftwareSimulationData;
