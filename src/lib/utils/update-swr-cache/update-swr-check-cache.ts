import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrCheckCache = async (id?: number) => {
  // TODO передать индивидуальный id чека, чтобы не лопатить все
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        key.startsWith(
          id
            ? `${UseSwrKeysEnum.ApiBackendReceiptGetOne}-${id}`
            : UseSwrKeysEnum.ApiBackendReceiptGetOne
        ),
      undefined,
      {
        revalidate: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};
