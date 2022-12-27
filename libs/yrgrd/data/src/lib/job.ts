export const JOB_LIST = [
  'warrior',
  'ranger',
  'mage',
  'cleric',
  'merchant',
  'monk',
] as const;
export type Job = typeof JOB_LIST[number];
