import { mutate } from 'swr';
import { UseSwrKeysEnum } from '@/lib/enums/use-swr-keys.enum';

export const updateSwrGoodCache = async (id: number) => {
  try {
    await mutate(
      (key) =>
        typeof key === 'string' &&
        key === `${UseSwrKeysEnum.ActionCard}-${id}` /*,
      undefined,
      {
        revalidate: true,
      }*/
    );
  } catch (e) {
    console.error(e);
  }
};
