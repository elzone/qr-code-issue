import { IonPage } from '@ionic/react';
import { FC } from 'react';
import { Children } from '@/lib/types/common';

type PageWrapperProps = Children & {
  classes?: string;
  styles?: any;
};

const PageWrapper: FC<PageWrapperProps> = ({ children, classes, styles }) => {
  return (
    <IonPage
      className={`${classes ? classes : ``}`}
      style={styles}
    >
      {children}
    </IonPage>
  );
};

export { PageWrapper };
