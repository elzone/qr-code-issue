import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import ScanQrPage from "@/pages/scan-qr/scan-qr-page";

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={`/`} component={ScanQrPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRouter;
