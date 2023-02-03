import {
  composJson,
  EquipCategory,
  equipsJson,
  Job,
  StatsTable,
  STAT_LIST,
  WeaponType,
} from '@trc-tools/yrgrd/data';
import { mergeStats } from './util';

export class Equipment {
  name: string;
  category: EquipCategory;
  weaponType?: WeaponType;
  isTwoHanded?: boolean;
  requiredLevel: number;
  equipableJobs: Job[];
  enhance?: number;
  compo?: Compo;

  get stats(): Partial<StatsTable> {
    console.log('call Equipment.stats');
    const base = getEquipJsonValue(this.name).stats;
    const enhance = calcEquipEnhanceStats(base, this.enhance ?? 0);
    return mergeStats(base, enhance);
  }

  constructor(options: EquipmentOptions) {
    const json = getEquipJsonValue(options.name);

    this.name = options.name;
    this.category = json.category;
    this.weaponType = json.weaponType;
    this.isTwoHanded = json.isTwoHanded;
    this.requiredLevel = json.requiredLevel;
    this.equipableJobs = json.equipableJobs;
    this.enhance = options.enhance;
    this.compo = options.compo;
  }
}

export interface EquipmentOptions {
  name: string;
  enhance?: number;
  compo?: Compo;
}

function getEquipJsonValue(name: string) {
  const json = equipsJson.find((obj) => obj.name === name);
  if (!json) {
    throw new Error(`Error: Invalid equipment name`);
  }

  return {
    category: json.category,
    weaponType: json.weaponType,
    isTwoHanded: json.isTwoHanded,
    requiredLevel: json.requiredLevel,
    equipableJobs: json.equipableJobs,
    stats: json.stats,
  } as {
    category: EquipCategory;
    weaponType: WeaponType | undefined;
    isTwoHanded: boolean | undefined;
    requiredLevel: number;
    equipableJobs: Job[];
    stats: Partial<StatsTable>;
  };
}

export function calcEquipEnhanceStats(
  stats: Partial<StatsTable>,
  enhance: number
) {
  if (enhance <= 0) return {};
  const result: Partial<StatsTable> = {};

  STAT_LIST.forEach((key) => {
    const value = stats[key] ?? 0;
    if (!value) return;

    switch (key) {
      case 'atk':
      case 'def':
      case 'matk':
      case 'mdef':
      case 'hit':
      case 'flee':
      case 'critRate':
        result[key] = calcEnhanceValue(value, enhance);
        break;
      default:
        break;
    }
  });
  return result;
}

export function calcEnhanceValue(value: number, enhance: number) {
  return Math.max(enhance, Math.floor(value * enhance * 0.1));
}

class Compo {
  name: string;
  stats: Partial<StatsTable> = {};

  constructor(name: string) {
    const json = getCompoJsonValue(name);
    this.name = name;
    this.stats = json.stats;
  }
}

function getCompoJsonValue(name: string) {
  const obj = composJson.find((obj) => obj.name === name);
  if (!obj) {
    throw new Error(`Error getCompoJsonValue`);
  }
  return {
    stats: obj.stats,
  } as {
    stats: Partial<StatsTable>;
  };
}
