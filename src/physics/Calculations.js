const densityAluminum = 2700; // kg/m^3
const densitySteel = 7850; // kg/m^3
const gravity = 9.81; // m/s^2
const pi = Math.PI; // Pi constant
const armLength = 0.17; // meters
const armDiameter = 0.015; // meters
const ballDiameter = 0.015; // meters

const volumeSphere = (diameter) => (4 / 3) * pi * Math.pow(diameter / 2, 3);

const massBall = () => densitySteel * volumeSphere(ballDiameter);

const volumeCylinder = (diameter, length) =>
  pi * Math.pow(diameter / 2, 2) * length;

const massArm = () => densityAluminum * volumeCylinder(armDiameter, armLength);

const calculateMomentOfInertia = () => {
  const I_rod = (1 / 3) * massArm() * Math.pow(armLength, 2);
  const I_ball = massBall() * Math.pow(armLength, 2);
  return I_rod + I_ball;
};

const calculateFinalAngularVelocity = (
  initialAngularVelocity,
  angularAcceleration,
  time
) => {
  const finalAngularVelocity =
    initialAngularVelocity + angularAcceleration * time;
  return Math.min(finalAngularVelocity, 20); // The max speed is 20 rad/s
};

export const calculateMaxAngularSpeed = (torque) => {
  const I_total = calculateMomentOfInertia();
  const maxAngularSpeed = torque / I_total;
  return maxAngularSpeed; // In radians per second
};

export const calculateLaunchDistance = (
  initialAngleRadians,
  motorTorque,
  releaseAngleRadians
) => {
  // Radians increase in direction of ball from image
  if (releaseAngleRadians <= initialAngleRadians) {
    return 0;
  }

  // Angular acceleration (α = τ / I)
  const angularAcceleration = motorTorque / calculateMomentOfInertia();

  // Calculate the max angular speed for the given torque
  const maxAngularSpeed = calculateMaxAngularSpeed(motorTorque);

  // Time to release (t) based on angular acceleration and release angle
  // Assuming the arm starts from rest, so initial angular velocity is 0
  const timeToRelease = Math.sqrt(
    (2 * releaseAngleRadians) / angularAcceleration
  );

  // Final angular velocity at release
  const finalAngularVelocity = Math.min(
    calculateFinalAngularVelocity(0, angularAcceleration, timeToRelease),
    maxAngularSpeed
  );

  // Linear velocity at release (v = ω * r)
  const linearVelocity = finalAngularVelocity * armLength;

  // Range = (v^2 * sin(2 * θ)) / g
  const range =
    (linearVelocity * linearVelocity * Math.sin(2 * releaseAngleRadians)) /
    gravity;

  return Math.abs(range); // meters
};
