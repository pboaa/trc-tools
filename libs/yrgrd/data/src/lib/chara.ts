import { BonusTable } from './bonus';
import { MAX_LEVEL } from './constants';
import { Job } from './job';
import { StatsTable } from './stats';

export class Chara {
  job: Job = 'warrior';
  level = MAX_LEVEL;
  bonuses: Partial<BonusTable> = {};

  stats: Partial<StatsTable> = {};

  baseStats: Partial<StatsTable> = {};
  jobStats: Partial<StatsTable> = {};
  bonusStats: Partial<StatsTable> = {};
  equipsStats: Partial<StatsTable> = {};

  constructor(options?: Partial<Exclude<Chara, 'stats'>>) {
    if (options) {
      this.job = options.job ?? 'warrior';
      this.level = options.level ?? MAX_LEVEL;
      this.bonuses = options.bonuses ?? {};
    }
  }
}
