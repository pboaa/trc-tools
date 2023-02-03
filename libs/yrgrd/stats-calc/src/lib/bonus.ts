import { BonusTable, StatsTable } from '@trc-tools/yrgrd/data';
import { BONUS_LIST } from '@trc-tools/yrgrd/data';

export function calcBonusStats(bonuses: Partial<BonusTable>) {
  const stats: Partial<StatsTable> = {};

  BONUS_LIST.forEach((key) => {
    const value = bonuses[key] ?? 0;
    if (!value) return;

    switch (key) {
      case 'pow':
        stats['atk'] = value;
        break;
      case 'con':
        stats['hp'] = value * 5;
        stats['def'] = Math.trunc(value * 0.5);
        break;
      case 'int':
        stats['ap'] = value * 3;
        stats['matk'] = value;
        stats['mdef'] = Math.trunc(value * 0.5);
        break;
      case 'agi':
        stats['flee'] = value;
        break;
      case 'dex':
        stats['hit'] = value;
        //   stats["dmgRange"] = -value;
        break;
      case 'luk':
        stats['critRate'] = value;
        break;
      default:
        break;
    }
  });

  return stats;
}
