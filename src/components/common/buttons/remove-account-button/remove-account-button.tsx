import { IonIcon, useIonRouter } from '@ionic/react';
import { Button } from '@/components/ui/button';
import { iconBaseSizeClasses } from '@/lib/icon-base-size-classes';
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { apiBackend } from '@/lib/api/apiBackend';
import { Preferences } from '@capacitor/preferences';
import { useClearSwrCache } from '@/lib/hooks/use-clear-swr-cache';
import { useResetAllStores } from '@/lib/hooks/use-reset-all-stores';
import { useApiErrorHandler } from '@/lib/hooks/use-api-error-handler';
import { unregisterPushToken } from '@/lib/services/push-notifications.service';

const RemoveAccountButton = () => {
  const router = useIonRouter();
  const { handleApiError } = useApiErrorHandler();
  const { clearCache } = useClearSwrCache();
  const { resetAllStores } = useResetAllStores();

  const handleRemoveClick = async () => {
    try {
      await unregisterPushToken();
      await apiBackend.user.delete();
      await Preferences.clear();
      await clearCache();
      resetAllStores();
      router.push(`/`, 'none');
    } catch (e) {
      console.log(e.status);
      handleApiError(e);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id="remove-account-alert"
          variant={`ghostPrimary`}
          size={`fit`}
          aria-label={`Удалить аккаунт`}
        >
          <IonIcon
            aria-hidden={true}
            src={`/assets/app-icons/delete.svg`}
            className={iconBaseSizeClasses}
          />
          Удалить аккаунт
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={`Модальное окно удалить аккаунт`}>
        <DialogHeader>
          <DialogTitle>Удалить аккаунт?</DialogTitle>
        </DialogHeader>
        <div className={'flex space-x-10 justify-between'}>
          <Button
            variant={'outline'}
            onClick={handleRemoveClick}
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

export { RemoveAccountButton };
