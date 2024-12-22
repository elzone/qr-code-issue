import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrBalanceCache = async () => {
  try {
    await mutate(UseSwrKeysEnum.ApiBackendPaymentBalance, undefined, {
      revalidate: true,
    });
  } catch (e) {
    console.error(e);
  }
};
