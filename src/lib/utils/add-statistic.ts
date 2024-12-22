import { apiBackend } from '@/lib/api/apiBackend';
import addViewEvents from '@up-im/apcheki_sdk/dist/interfaces/apiStatEvents';

export const addStatistic = (
  itemId: number,
  statisticEvent: (typeof addViewEvents)[number]
) => {
  if (!isNaN(itemId)) {
    const addViewStatistic = async () =>
      await apiBackend.stat.add({
        itemId,
        event: statisticEvent,
      });

    addViewStatistic().catch((e) => console.log(e));
  }
};
