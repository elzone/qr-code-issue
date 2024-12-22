import { WithRouteButton } from '@/components/common/buttons/with-route-button/with-route-button';
import { FC } from 'react';

type ToTheDrugProps = {
  id: number;
  onClick: () => void;
};

const ToTheDrug: FC<ToTheDrugProps> = ({ id, onClick }) => {
  return (
    <WithRouteButton
      route={`/tabs/good/${id}`}
      onClick={onClick}
    >
      К акции
    </WithRouteButton>
  );
};

export { ToTheDrug };
