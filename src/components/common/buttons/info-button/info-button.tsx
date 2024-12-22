import { IonIcon } from '@ionic/react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ToTheDrug } from '@/components/common/buttons/to-the-drug/to-the-drug';
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';

type InfoButtonProps = {
  id: number;
};

const InfoButton: FC<InfoButtonProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(value) => {
        if (!value) {
          handleClose();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={`ghost`}
          size={`iconSmall`}
          className={`text-primary`}
          onClick={handleOpenClick}
        >
          <IonIcon
            aria-hidden={true}
            size={`large`}
            src={`/assets/app-icons/info.svg`}
          />
        </Button>
      </DialogTrigger>
      <DialogTitle hidden>Информайия об акции</DialogTitle>
      <DialogContent aria-describedby={`Информайия об акции`}>
        <div className={`text-center space-y-6`}>
          <div className={`text-h3 leading-6`}>
            Акция действует
            <br />
            не во всех аптеках
          </div>
          <ToTheDrug
            id={id}
            onClick={handleClose}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { InfoButton };
