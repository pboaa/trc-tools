import { ADVANTAGE_MULTIPLIER, DIS_ADVANTAGE_MULTIPLIER } from './constants';

export const ELEMENT_LIST = [
  'none',
  'fire',
  'water',
  'forest',
  'light',
  'dark',
] as const;
export type Element = typeof ELEMENT_LIST[number];
export type ElementTable<T = number> = { [element in Element]: T };

type ElementMultipliers = {
  [key in Element]?: number;
};

const ELEMENT_MULTIPLIERS: { [key: string]: ElementMultipliers } = {
  none: {},
  fire: {
    forest: ADVANTAGE_MULTIPLIER,
    water: DIS_ADVANTAGE_MULTIPLIER,
  },
  water: {
    fire: ADVANTAGE_MULTIPLIER,
    forest: DIS_ADVANTAGE_MULTIPLIER,
  },
  forest: {
    water: ADVANTAGE_MULTIPLIER,
    fire: DIS_ADVANTAGE_MULTIPLIER,
  },
  light: {},
  dark: {},
};

function elementMultiplier(
  attackerElement: Element,
  defenderElement: Element
): number {
  const multipliers = ELEMENT_MULTIPLIERS[attackerElement];
  return multipliers[defenderElement] ?? 1;
}
