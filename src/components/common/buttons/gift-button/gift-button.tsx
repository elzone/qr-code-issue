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

type GiftButtonProps = {
  id: number;
};

const GiftButton: FC<GiftButtonProps> = ({ id }) => {
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
          name={`gift`}
          onClick={handleOpenClick}
        >
          <IonIcon
            aria-hidden={true}
            size={`large`}
            src={`/assets/app-icons/gift.svg`}
          />
        </Button>
      </DialogTrigger>
      <DialogTitle hidden>Дополнительные бонусы!</DialogTitle>
      <DialogContent aria-describedby={`Дополнительные бонусы!`}>
        <div className={`text-center space-y-6`}>
          <div className={`text-h3`}>Дополнительные бонусы!</div>
          <ToTheDrug
            id={id}
            onClick={handleClose}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { GiftButton };
