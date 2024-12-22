import { IonButtons } from '@ionic/react';
import { BackButton } from '@/components/common/buttons/back-button/back-button';
import { FC } from 'react';

type Props = {
  backLink?: string | undefined;
};

const HeaderBackButton: FC<Props> = ({ backLink }) => {
  return (
    <IonButtons slot={`start`}>
      <BackButton backLink={backLink} />
    </IonButtons>
  );
};

export { HeaderBackButton };
