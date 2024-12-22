import { Capacitor } from '@capacitor/core';

export const getPlatformStatusBarHeight = () => {
  const platform = Capacitor.getPlatform();
  return platform === 'ios' ? 3 : 0;
};
