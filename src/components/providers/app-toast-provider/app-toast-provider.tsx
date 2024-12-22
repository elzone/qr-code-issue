import { useEffect } from 'react';
import { useIonToast } from '@ionic/react';
import { PageToastProps } from '@/components/providers/app-toast-provider/types/app-toast-provider.type';

const AppToastProvider = () => {
  const [present] = useIonToast();

  const presentToast = async (e: CustomEvent) => {
    const data: PageToastProps = e.detail;
    if (data) {
      const { message, duration, position, type } = data;
      await present({
        message,
        duration: duration ?? 3000,
        position: position ?? 'top',
        positionAnchor: 'header',
        cssClass: `custom-${type}`,
      });
    }
  };

  useEffect(() => {
    document.addEventListener(`AppToast`, presentToast);

    return () => {
      document.removeEventListener(`AppToast`, presentToast);
    };
  }, []);
};

export { AppToastProvider };
