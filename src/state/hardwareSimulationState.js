import { atom } from 'recoil';

export const maxMotorTorqueState = atom({
  key: 'maxMotorTorqueState',
  default: 2, // 2 NM as a default value
});

export const maxSpeedState = atom({
  key: 'maxSpeedState',
  default: 20, // 20 radians/second as a default value
});

export const absMaxSpeedState = atom({
  key: 'absMaxSpeedState',
  default: 20, // 20 radians/second as a default value
});
