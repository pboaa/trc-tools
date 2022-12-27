export const BONUS_LIST = ['pow', 'con', 'int', 'agi', 'dex', 'luk'] as const;
export type Bonus = typeof BONUS_LIST[number];
export type BonusTable<T = number> = { [bonus in Bonus]: T };
