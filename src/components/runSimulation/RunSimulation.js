// import './RunSimulation.css';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  maxMotorTorqueState,
  maxSpeedState,
} from '../../state/hardwareSimulationState';
import {
  startingPositionState,
  currentMotorTorqueState,
  ballReleasePositionState,
} from '../../state/softwareSimulationState';
import { calculateLaunchDistance } from '../../physics/Calculations';

function RunSimulation() {
  // Software values
  const startingPosition = useRecoilValue(startingPositionState);
  const currentMotorTorque = useRecoilValue(currentMotorTorqueState);
  const ballReleasePosition = useRecoilValue(ballReleasePositionState);

  // Hardware values
  const maxMotorTorque = useRecoilValue(maxMotorTorqueState);
  const maxSpeed = useRecoilValue(maxSpeedState);

  const [launchDistance, setLaunchDistance] = useState(0);

  useEffect(() => {
    // Convert to radians
    const startingPositionRadians = (startingPosition * Math.PI) / 6;
    const ballReleasePositionRadians = (ballReleasePosition * Math.PI) / 6;

    const distance = calculateLaunchDistance(
      startingPositionRadians,
      currentMotorTorque,
      ballReleasePositionRadians
    );
    setLaunchDistance(distance);
  }, [
    startingPosition,
    currentMotorTorque,
    ballReleasePosition,
    maxMotorTorque,
    maxSpeed,
  ]);

  return (
    <div className="run-simulation">
      <h2 className="section-title">Launch Distance</h2>
      <p>{`Launch distance (Absolute Value): ${launchDistance.toFixed(2)} meters`}</p>
    </div>
  );
}

export default RunSimulation;
