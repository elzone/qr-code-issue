import { Button, buttonVariants } from '@/components/ui/button';
import { IonIcon } from '@ionic/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import { apiBackend } from '@/lib/api/apiBackend';
import useSWR from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';
import { addStatistic } from '@/lib/utils/add-statistic';

type FavoriteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    skuId: number;
    onFavoriteClick?: () => void;
  };

const FavoriteButton: FC<FavoriteButtonProps> = ({
  skuId,
  onFavoriteClick,
  ...props
}) => {
  const { data, mutate } = useSWR(
    `${UseSwrKeysEnum.ApiBackendBookmarksInBookmarks}-${skuId}`,
    async () => await apiBackend.bookmarks.inBookmarks({ skuId })
  );

  const handleClick = (e) => {
    e.stopPropagation();

    const updateFavorite = async () => {
      return await apiBackend.bookmarks.mutate({ skuId, isAdd: !data });
    };

    updateFavorite()
      .then(async () => {
        try {
          addStatistic(skuId, 'CATALOG_SKU/FAVORITE');
          await mutate(!data);
          if (onFavoriteClick) {
            onFavoriteClick();
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        document.dispatchEvent(
          new CustomEvent(`AppErrorMessage`, {
            detail: { message: error.message },
          })
        );
      });
  };

  return (
    <Button
      variant={`ghost`}
      onClick={handleClick}
      {...props}
    >
      <IonIcon
        aria-hidden={true}
        size={`large`}
        src={`/assets/app-icons/favor${data ? '-fill' : ''}.svg`}
      />
    </Button>
  );
};

export { FavoriteButton };
