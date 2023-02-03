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
// export type ElementTable<T = number> = { [element in Element]: T };

const ELEMENT_MULTIPLIERS: {
  [key in Element]: {
    [key in Element]?:
      | typeof ADVANTAGE_MULTIPLIER
      | typeof DIS_ADVANTAGE_MULTIPLIER;
  };
} = {
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

function getElementMultiplier(
  attackerElement: Element,
  defenderElement: Element
) {
  return ELEMENT_MULTIPLIERS[attackerElement][defenderElement] ?? 1;
}
