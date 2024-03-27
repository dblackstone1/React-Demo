import {
  calculateMaxAngularSpeed,
  calculateLaunchDistance,
} from './Calculations';

describe('Geometry and Inertia Calculations', () => {
  const torque = 2; // Nm
  const initialAngleRadians = 0; // Starting from horizontal position
  const releaseAngleRadians = Math.PI / 4; // 45 degrees in radians

  test('calculates max angular speed correctly', () => {
    const expectedMaxAngularSpeed = 1691.6431639735345;
    const maxAngularSpeed = calculateMaxAngularSpeed(torque);
    expect(maxAngularSpeed).toBeCloseTo(expectedMaxAngularSpeed);
  });

  test('calculates launch distance correctly', () => {
    const expectedLaunchDistance = 1.178389398572885;
    const launchDistance = calculateLaunchDistance(
      initialAngleRadians,
      torque,
      releaseAngleRadians
    );
    expect(launchDistance).toBeCloseTo(expectedLaunchDistance);
  });
});
