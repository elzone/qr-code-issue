import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrNotificationsCache = async () => {
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        key.startsWith(UseSwrKeysEnum.ApiBackendPushGetList),
      undefined,
      {
        revalidate: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};
