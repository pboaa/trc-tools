export const JobArr = [
  'warrior',
  'ranger',
  'mage',
  'cleric',
  'merchant',
  'monk',
] as const;
export type Job = typeof JobArr[number];
