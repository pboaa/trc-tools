import { StatsTable, STAT_LIST } from '@trc-tools/yrgrd/data';

export function mergeStats(
  ...statsArr: (Partial<StatsTable<number>> | undefined)[]
) {
  const result: Partial<StatsTable> = {};

  statsArr.forEach((stats) => {
    if (!stats) return;
    STAT_LIST.forEach((key) => {
      const value = stats[key];
      if (!value) return;

      result[key] = (result[key] ?? 0) + value;
    });
  });

  return result;
}
