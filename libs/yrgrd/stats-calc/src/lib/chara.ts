import { Chara } from '@trc-tools/yrgrd/data';
import { calcBonusStats } from './bonus';
import { calcJobStats } from './job';
import { mergeStatsArr } from './util';

export function calcCharaStats(chara: Chara) {
  chara.jobStats = calcJobStats(chara.job, chara.level);
  chara.bonusStats = calcBonusStats(chara.bonuses);
  chara.baseStats = mergeStatsArr(chara.jobStats, chara.bonusStats);

  chara.stats = mergeStatsArr(chara.baseStats);

  return chara.stats;
}
