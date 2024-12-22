import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrChecksCache = async () => {
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        key.startsWith(UseSwrKeysEnum.ApiBackendPaymentGetListChecks),
      undefined,
      {
        revalidate: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};
