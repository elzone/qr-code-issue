import { IonApp, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "@/theme/variables.scss";

/* Tailwind CSS */
import "@/theme/tailwind.scss";

import Providers from "./components/providers/providers";
import AppRouter from "@/components/app-router";
import { FC } from "react";

/* Ion style update */
import "@/theme/ion-css-update.scss";

setupIonicReact({
  rippleEffect: false,
  mode: "ios",
  platform: {
    /** The default `desktop` function returns false for devices with a touchscreen.
     * This is not always wanted, so this function tests the User Agent instead.
     **/
    desktop: (win) => {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          win.navigator.userAgent,
        );
      return !isMobile;
    },
  },
});

const AppInit: FC = () => {
  return (
    <Providers>
      <IonApp>
        <AppRouter />
      </IonApp>
    </Providers>
  );
};

export default AppInit;
