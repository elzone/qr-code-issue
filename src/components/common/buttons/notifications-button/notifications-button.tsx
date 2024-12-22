import { IonIcon } from '@ionic/react';
import { WithRouteButton } from '@/components/common/buttons/with-route-button/with-route-button';
import { apiBackend } from '@/lib/api/apiBackend';
import useSWR from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

const NotificationsButton = () => {
  const { data } = useSWR(
    UseSwrKeysEnum.ApiBackendPushCountNew,
    async () => await apiBackend.push.countNew()
  );

  const isNewNotificationsPresent = data && data.totalItems > 0;

  return (
    <div className={`relative notifications-button`}>
      <WithRouteButton
        aria-label={`Уведомления`}
        variant={`ghost`}
        size={`fit`}
        route={`/tabs/lk/notifications`}
      >
        <IonIcon
          aria-hidden="true"
          src={`/assets/app-icons/bell.svg`}
          className={`w-6 h-6`}
        />
      </WithRouteButton>
      {isNewNotificationsPresent && (
        <div
          className={`absolute -top-0.5 right-0 inline-block w-2 h-2 rounded-full bg-error-red-800`}
        />
      )}
    </div>
  );
};

export { NotificationsButton };
