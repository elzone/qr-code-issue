import { Button } from '@/components/ui/button';
import { IonIcon } from '@ionic/react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FC } from 'react';

type BannerInfoButtonProps = {
  bannerInfo: string;
};

const BannerInfoButton: FC<BannerInfoButtonProps> = ({ bannerInfo }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={`ghost`}
          size={`iconSmall`}
          className={`text-gray-300`}
        >
          <IonIcon
            aria-hidden={true}
            size={`large`}
            src={`/assets/app-icons/info.svg`}
          />
        </Button>
      </DialogTrigger>
      <DialogTitle hidden>Рекламный баннер</DialogTitle>
      <DialogContent aria-describedby={`Рекламный баннер`}>
        <div className={`my-2 text-center`}>
          <div
            className={`text-sm text-gray-500`}
            dangerouslySetInnerHTML={{
              __html: bannerInfo?.replaceAll(/(\r\n|\r|\n)/g, `<br />`),
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { BannerInfoButton };
