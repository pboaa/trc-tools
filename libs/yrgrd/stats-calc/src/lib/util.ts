import { StatsTable, STAT_LIST } from '@trc-tools/yrgrd/data';

export function mergeStatsArr(...statsArr: Partial<StatsTable<number>>[]) {
  const result: Partial<StatsTable> = {};

  statsArr.forEach((stats) => {
    STAT_LIST.forEach((key) => {
      const value = stats[key];
      if (!value) return;

      result[key] = (result[key] ?? 0) + value;
    });
  });

  return result;
}
