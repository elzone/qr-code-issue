import { IonIcon, useIonRouter } from '@ionic/react';
import { iconBaseSizeClasses } from '@/lib/icon-base-size-classes';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from '@/components/ui/dialog';
import { apiBackend } from '@/lib/api/apiBackend';
import { DialogClose } from '@radix-ui/react-dialog';
import { useClearSwrCache } from '@/lib/hooks/use-clear-swr-cache';
import { useResetAllStores } from '@/lib/hooks/use-reset-all-stores';
import { unregisterPushToken } from '@/lib/services/push-notifications.service';

const ExitFromAccountButton = () => {
  const router = useIonRouter();
  const { clearCache } = useClearSwrCache();
  const { resetAllStores } = useResetAllStores();

  const handleLogoutClick = async () => {
    try {
      await unregisterPushToken();
      await apiBackend.user.logout();
      await clearCache();
      resetAllStores();
      router.push(`/auth`, 'root');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id="exit-from-account-alert"
          variant={`ghostPrimary`}
          size={`fit`}
          aria-label={`Выйти из аккаунта`}
        >
          <IonIcon
            aria-hidden={true}
            src={`/assets/app-icons/logout.svg`}
            className={iconBaseSizeClasses}
          />
          Выйти из аккаунта
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={`Модальное окно выйти из аккаунта`}>
        <DialogHeader>
          <DialogTitle>Выйти из аккаунта?</DialogTitle>
        </DialogHeader>
        <div className={'flex space-x-10 justify-between'}>
          <Button
            variant={'outline'}
            onClick={handleLogoutClick}
          >
            Да
          </Button>
          <DialogClose asChild>
            <Button>Нет</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ExitFromAccountButton };
