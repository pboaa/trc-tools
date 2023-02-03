import {
  Job,
  MAX_LEVEL,
  BonusTable,
  EquipTable,
  StatsTable,
} from '@trc-tools/yrgrd/data';
import { calcBonusStats } from './bonus';
import { Equipment } from './equip';
import { calcJobStats } from './job';
import { mergeStats } from './util';

export class Chara {
  job: Job = 'warrior';
  level = MAX_LEVEL;
  bonuses: Partial<BonusTable> = {};
  equips: Partial<EquipTable<Equipment>> = {};

  constructor(options?: CharaOptions) {
    if (options) {
      this.job = options.job ?? 'warrior';
      this.level = options.level ?? MAX_LEVEL;
      this.bonuses = options.bonuses ?? {};
      this.equips = options.equips ?? {};
    }
  }

  get stats(): Partial<StatsTable> {
    console.log('call Chara.stats');
    const jobStats = calcJobStats(this.job, this.level);
    const bonusStats = calcBonusStats(this.bonuses);
    const baseStats = mergeStats(jobStats, bonusStats);

    const equipsStatsArr = Object.entries(this.equips).map(([_, equip]) => {
      return equip.stats;
    });

    const equipsStats = mergeStats(...equipsStatsArr);

    return mergeStats(baseStats, equipsStats);
  }
}

export interface CharaOptions {
  job?: Job;
  level?: number;
  bonuses?: Partial<BonusTable>;
  equips?: Partial<EquipTable<Equipment>>;
}
