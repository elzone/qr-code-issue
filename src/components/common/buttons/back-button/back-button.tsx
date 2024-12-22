import { chevronBack } from 'ionicons/icons';

import { FC } from 'react';
import { IonBackButton, iosTransitionAnimation } from '@ionic/react';

type Props = {
  backLink?: string | undefined;
};

const BackButton: FC<Props> = ({ backLink }) => {
  return (
    <>
      <IonBackButton
        text={``}
        defaultHref={backLink ? backLink : `/tabs/home`}
        type={`button`}
        color={`primary`}
        icon={chevronBack}
        routerAnimation={iosTransitionAnimation}
      />
    </>
  );
};

export { BackButton };
