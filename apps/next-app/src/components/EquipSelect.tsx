import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { OverlayPanel } from 'primereact/overlaypanel';

import {
  BonusTable,
  EquipCategory,
  equipsJson,
  EquipTable,
  MAX_LEVEL,
} from '@trc-tools/yrgrd/data';
import { Chara, Equipment } from '@trc-tools/yrgrd/stats-calc';

export interface EquipSelectProps {
  chara: Chara;
  equipCategory: EquipCategory;
  setChara: (chara: Chara) => void;
}

const emptyEquip = { label: '----', value: undefined };

export function EquipSelect(props: EquipSelectProps) {
  const { chara, equipCategory, setChara } = props;
  const equip = chara.equips[equipCategory];
  const selected = equip ? equip : emptyEquip;

  const equipList = equipsJson
    .filter((equip) => equip.category === equipCategory)
    .map((equip) => new Equipment({ name: equip.name }));
  const options = equipList.map((e) => ({ label: e.name, value: e }));
  options.unshift(emptyEquip);

  const update = (equip: Equipment) => {
    if (equip.category) {
      chara.equips[equipCategory] = equip;
    } else {
      delete chara.equips[equipCategory];
    }
    setChara(chara);
  };
  // const optionTemplate = (option: {
  //   label: string;
  //   value: Equipment | undefined;
  // }) => {
  //   if (option.value) {
  //     const statsLabel = Object.entries(option.value.stats).map(([k, v]) => (
  //       <span key={k}>
  //         <Chip label={k} />: {v}
  //       </span>
  //     ));
  //     return (
  //       <div>
  //         {option.label}
  //         <div>{statsLabel}</div>
  //       </div>
  //     );
  //   }
  //   return <div>{option.label}</div>;
  // };
  return (
    <div>
      <span className="p-float-label">
        <Dropdown
          value={selected}
          options={options}
          onChange={(e) => update(e.value)}
          // itemTemplate={optionTemplate}
        />
        <label>{equipCategory}</label>
      </span>
    </div>
  );
}
