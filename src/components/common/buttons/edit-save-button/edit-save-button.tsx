import { IonIcon } from '@ionic/react';
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';

type EditSaveButtonProps = {
  handleClick: (state: string) => void;
  disabled?: boolean;
};

const EditSaveButton: FC<EditSaveButtonProps> = ({ handleClick, disabled }) => {
  const [buttonState, setButtonState] = useState<'edit' | 'save'>(`edit`);

  const iconSrc =
    buttonState === 'edit'
      ? `/assets/app-icons/edit.svg`
      : `/assets/app-icons/save.svg`;

  const onClick = () => {
    if (handleClick) {
      handleClick(buttonState);
    }
    setButtonState(buttonState === `edit` ? `save` : `edit`);
  };

  return (
    <Button
      type={buttonState === 'edit' ? `submit` : `button`}
      onClick={onClick}
      variant={`ghost`}
      size={`noSizeAround`}
      className={`w-7 h-6 rounded-full ${buttonState === 'save' && disabled ? `text-gray-300` : `text-primary`}`}
      disabled={buttonState === 'save' && disabled}
    >
      <IonIcon
        aria-hidden={true}
        src={iconSrc}
        className={`w-full h-full`}
      />
    </Button>
  );
};

export { EditSaveButton };
