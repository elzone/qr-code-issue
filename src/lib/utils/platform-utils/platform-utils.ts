import { Capacitor } from '@capacitor/core';

export const checkIsMobilePlatform = () => {
  return Capacitor.getPlatform() !== 'web';
};

export const checkIsAndroidPlatform = () => {
  return Capacitor.getPlatform() === 'android';
};

export const checkIsIosPlatform = () => {
  return Capacitor.getPlatform() === 'ios';
};

export const platform = Capacitor.getPlatform();
