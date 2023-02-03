export const EQUIP_CATEGORY_LIST = [
  'weapon',
  'shield',
  'armor',
  'shoes',
  'accessory',
  'head',
] as const;
export type EquipCategory = typeof EQUIP_CATEGORY_LIST[number];
export type EquipTable<T = number> = { [bonus in EquipCategory]: T };

export const WEAPON_TYPE_LIST = [
  'sword',
  'dagger',
  'wand',
  'axe',
  'spear',
  'bow',
  'glove',
  'mace',
] as const;
export type WeaponType = typeof WEAPON_TYPE_LIST[number];
