import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrGoodCashbackItemsCache = async (id: number) => {
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        key === `${UseSwrKeysEnum.ApiBackendStatGetEvent}-${id}` /*,
      undefined,
      {
        revalidate: true,
      }*/
    );
  } catch (e) {
    console.error(e);
  }
};
