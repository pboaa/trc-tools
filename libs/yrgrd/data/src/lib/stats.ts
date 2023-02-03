export const STAT_LIST = [
  'hp',
  'ap',
  'sp',
  'atk',
  'def',
  'matk',
  'mdef',
  'hit',
  'flee',
  'critRate',
  'critDmg',
  'turnSpd',
  'ariaSpd',
  'moveSpd',
  'dmgRange',
  'fire',
  'water',
  'forest',
  'light',
  'dark',
  'psnRes',
  'stnRes',
  'brnRes',
  'heal',
] as const;
export type Stat = typeof STAT_LIST[number];
export type StatsTable<T = number> = { [stat in Stat]: T };

/** 初期ステータス */
export const jobBaseStats = {
  atk: 5,
  def: 5,
  matk: 5,
  mdef: 5,
  hit: 5,
  flee: 5,
  critRate: 1,
};
