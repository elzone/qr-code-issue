import { Device } from '@capacitor/device';

export const checkAndroidVersion = async () => {
  return (await Device.getInfo()).osVersion;
};
