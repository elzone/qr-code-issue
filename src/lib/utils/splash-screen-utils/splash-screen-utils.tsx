import { SplashScreen } from '@capacitor/splash-screen';

export const hideSPlashScreen = async () => {
  setTimeout(() => SplashScreen.hide(), 250);
};
