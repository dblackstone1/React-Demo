import {
  volumeSphere,
  massBall,
  volumeCylinder,
  massArm,
  calculateMomentOfInertia,
  calculateFinalAngularVelocity,
  calculateMaxAngularSpeed,
  calculateLaunchDistance,
} from './Calculations';

describe('Geometry and Inertia Calculations', () => {
  const pi = Math.PI;
  const densitySteel = 7850; // kg/m^3
  const densityAluminum = 2700; // kg/m^3
  const armLength = 0.17; // meters
  const armDiameter = 0.015; // meters
  const ballDiameter = 0.015; // meters
  const torque = 2; // Nm
  const initialAngleRadians = 0; // Starting from horizontal position
  const releaseAngleRadians = Math.PI / 4; // 45 degrees in radians

  test('calculates volume of sphere correctly', () => {
    const expectedVolume = (4 / 3) * pi * Math.pow(ballDiameter / 2, 3);
    expect(volumeSphere(ballDiameter)).toBeCloseTo(expectedVolume);
  });

  test('calculates mass of ball correctly', () => {
    const expectedMass = densitySteel * volumeSphere(ballDiameter);
    expect(massBall()).toBeCloseTo(expectedMass);
  });

  test('calculates volume of cylinder correctly', () => {
    const expectedVolume = pi * Math.pow(armDiameter / 2, 2) * armLength;
    expect(volumeCylinder(armDiameter, armLength)).toBeCloseTo(expectedVolume);
  });

  test('calculates mass of arm correctly', () => {
    const expectedMass =
      densityAluminum * volumeCylinder(armDiameter, armLength);
    expect(massArm()).toBeCloseTo(expectedMass);
  });

  test('calculates moment of inertia correctly', () => {
    const expectedI_rod = (1 / 3) * massArm() * Math.pow(armLength, 2);
    const expectedI_ball = massBall() * Math.pow(armLength, 2);
    const expectedInertia = expectedI_rod + expectedI_ball;
    expect(calculateMomentOfInertia()).toBeCloseTo(expectedInertia);
  });

  test('calculates final angular velocity correctly', () => {
    const initialAngularVelocity = 0; // rad/s
    const angularAcceleration = 10; // rad/s^2
    const time = 1; // s
    const expectedFinalVelocity = Math.min(
      initialAngularVelocity + angularAcceleration * time,
      20 // max speed
    );
    expect(
      calculateFinalAngularVelocity(
        initialAngularVelocity,
        angularAcceleration,
        time
      )
    ).toBeCloseTo(expectedFinalVelocity);
  });

  test('calculates max angular speed correctly', () => {
    const expectedMaxAngularSpeed = 30;
    const maxAngularSpeed = calculateMaxAngularSpeed(torque);
    expect(maxAngularSpeed).toBeCloseTo(expectedMaxAngularSpeed);
  });

  test('calculates launch distance correctly', () => {
    const expectedLaunchDistance = 15;
    const launchDistance = calculateLaunchDistance(
      initialAngleRadians,
      torque,
      releaseAngleRadians
    );
    expect(launchDistance).toBeCloseTo(expectedLaunchDistance);
  });
});
