import { atom } from 'recoil';

export const startingPositionState = atom({
  key: 'startingPositionState',
  default: 3,
});

export const currentMotorTorqueState = atom({
  key: 'currentMotorTorqueState',
  default: 2,
});

export const ballReleasePositionState = atom({
  key: 'ballReleasePositionState',
  default: 13,
});
