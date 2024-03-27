import { useRecoilState } from 'recoil';
import {
  maxMotorTorqueState,
  maxSpeedState,
  absMaxSpeedState,
} from '../../state/hardwareSimulationState';
import { calculateMaxAngularSpeed } from '../../physics/Calculations';
import './HardwareSimulationData.css';

function HardwareSimulationData() {
  const [maxMotorTorque, setMaxMotorTorque] =
    useRecoilState(maxMotorTorqueState);
  const [maxSpeed, setMaxSpeed] = useRecoilState(maxSpeedState);
  const [absMaxSpeed, setAbsMaxSpeed] = useRecoilState(absMaxSpeedState);

  const updateMaxSpeed = (newMaxMotorTorque) => {
    const newMaxSpeed = calculateMaxAngularSpeed(newMaxMotorTorque);
    if (newMaxSpeed > maxSpeed) {
      setMaxSpeed(newMaxSpeed);
    }
    setAbsMaxSpeed(newMaxSpeed);
  };

  return (
    <div className="hardware-simulation-data">
      <h2 className="section-title">Hardware Simulation Data</h2>
      <label>
        Maximum Motor Torque (Nm):
        <input
          type="number"
          className="data-input"
          value={maxMotorTorque}
          min={0}
          onChange={(e) => {
            const newTorque = Number(e.target.value);
            setMaxMotorTorque(newTorque);
            updateMaxSpeed(newTorque);
          }}
        />
      </label>
      <label>
        Maximum Speed (radians/second):
        <input
          type="number"
          className="data-input"
          value={maxSpeed}
          max={absMaxSpeed}
          min={0}
          onChange={(e) => setMaxSpeed(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default HardwareSimulationData;
