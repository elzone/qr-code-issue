import { GiftButton } from '@/components/common/buttons/gift-button/gift-button';
import { InfoButton } from '@/components/common/buttons/info-button/info-button';
import { FavoriteButton } from '@/components/common/buttons/favorite-button/favorite-button';
import { FC } from 'react';

type FavorButtonsProps = {
  id: number;
  isShowGift: boolean;
  isShowInfo: boolean;
};

const FavorButtons: FC<FavorButtonsProps> = ({ ...props }) => {
  const { id, isShowGift, isShowInfo } = props;
  return (
    <div className={`flex items-center space-x-1.5 md:space-x-3`}>
      {isShowGift && <GiftButton id={id} />}
      {isShowInfo && <InfoButton id={id} />}
      <FavoriteButton
        skuId={id}
        size={`iconSmall`}
      />
    </div>
  );
};

export { FavorButtons };
