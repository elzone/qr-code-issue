import { useCamera } from '@/lib/hooks/use-camera';
import { checkIsMobilePlatform } from '@/lib/utils/platform-utils/platform-utils';

const AppNativeServiceProvider = () => {
  const { checkCameraPermissions } = useCamera();

  if (checkIsMobilePlatform()) {
    checkCameraPermissions();
  }

  return null;
};

export { AppNativeServiceProvider };
