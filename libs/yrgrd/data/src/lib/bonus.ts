export const BonusArr = ['pow', 'con', 'int', 'agi', 'dex', 'luk'] as const;
export type Bonus = typeof BonusArr[number];
export type BonusTable<T = number> = { [bonus in Bonus]: T };
