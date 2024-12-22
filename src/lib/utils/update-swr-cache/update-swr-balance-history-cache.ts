import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrBalanceHistoryCache = async () => {
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        key.startsWith(UseSwrKeysEnum.ApiBackendPaymentGetListHistory),
      undefined,
      {
        revalidate: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};
