import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrHomeCache = async () => {
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        (key.startsWith(UseSwrKeysEnum.ApiBackendContentGetCatalogListHome) ||
          key.startsWith(
            UseSwrKeysEnum.ApiBackendContentGetCatalogListFavorite
          ) ||
          key.startsWith(
            UseSwrKeysEnum.ApiBackendContentGetCatalogListFavoriteMyPharmacy
          )) /*,
      undefined,
      {
        revalidate: true,
      }*/
    );
  } catch (e) {
    console.error(e);
  }
};
