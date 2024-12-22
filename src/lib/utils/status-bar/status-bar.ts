import { StatusBar } from '@capacitor/status-bar';
import { checkIsAndroidPlatform } from '@/lib/utils/platform-utils/platform-utils';

export const updateStatusBar = async (isShow: boolean) => {
  if (checkIsAndroidPlatform()) {
    if (isShow) {
      await StatusBar.show();
    } else {
      await StatusBar.hide();
    }
  }
};
