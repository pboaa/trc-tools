import { EquipTable, EQUIP_CATEGORY_LIST } from '@trc-tools/yrgrd/data';
import { Chara, Equipment } from '@trc-tools/yrgrd/stats-calc';
import { EquipSelect } from './EquipSelect';

export interface EquipSelectProps {
  chara: Chara;
  setChara: (chara: Chara) => void;
}

export function EquipPanel(props) {
  return (
    <div>
      {EQUIP_CATEGORY_LIST.map((category) => (
        <EquipSelect
          equipCategory={category}
          chara={props.chara}
          setChara={props.setChara}
          key={category}
        />
      ))}
    </div>
  );
}
