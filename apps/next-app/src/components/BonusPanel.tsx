import {
  BonusTable,
  BONUS_LIST,
  EquipTable,
  EQUIP_CATEGORY_LIST,
} from '@trc-tools/yrgrd/data';
import { Chara, Equipment } from '@trc-tools/yrgrd/stats-calc';
import BonusInput from './BonusInput';

export interface BonusPanelProps {
  chara: Chara;
  setChara: (chara: Chara) => void;
}

export function BonusPanel(props: BonusPanelProps) {
  return (
    <div>
      {BONUS_LIST.map((name) => (
        <BonusInput
          chara={props.chara}
          bonusName={name}
          setChara={props.setChara}
          key={name}
        />
      ))}
    </div>
  );
}
