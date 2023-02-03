import { useRef } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { OverlayPanel } from 'primereact/overlaypanel';

import { Bonus, BonusTable, MAX_LEVEL } from '@trc-tools/yrgrd/data';
import { Chara } from '@trc-tools/yrgrd/stats-calc';

export interface BonusInputProps {
  chara: Chara;
  bonusName: Bonus;
  setChara: (chara: Chara) => void;
}

export function BonusInput(props: BonusInputProps) {
  const { chara, bonusName, setChara } = props;
  const bonuses = chara.bonuses;
  const bonus = chara.bonuses[bonusName];
  const maxBonus = chara.level - 1;

  const bonusValues = Object.entries(bonuses).map(([k, v]) => v);
  const sum = bonusValues.length
    ? bonusValues.reduce((sum, num) => (sum += num))
    : 0;
  const left = maxBonus - sum;

  const update = (value: number) => {
    if (value > maxBonus) value = maxBonus;
    if (value < 0) value = 0;

    chara.bonuses[bonusName] = value;
    console.log(chara);
    setChara(chara);
  };

  const op = useRef<OverlayPanel>(null);
  return (
    <div>
      <OverlayPanel ref={op}>
        <div className="grid">
          <div className="col">
            <Button onClick={(e) => update((bonus ?? 0) - 10)}>-10</Button>
            <Button onClick={(e) => update((bonus ?? 0) - 1)}>-1</Button>
            <Button onClick={(e) => update((bonus ?? 0) + 1)}>+1</Button>
            <Button onClick={(e) => update((bonus ?? 0) + 10)}>+10</Button>
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <Button onClick={(e) => update(0)}>0</Button>
            <Button onClick={(e) => update((bonus ?? 0) + maxBonus)}>
              Max
            </Button>
            <Button onClick={(e) => update((bonus ?? 0) + left)}>
              {left >= 0 ? '+' : ''}
              {left.toString()}
            </Button>
          </div>
        </div>
      </OverlayPanel>

      <span className="p-float-label">
        <InputNumber
          className="bonus-input"
          value={bonus ?? 0}
          min={0}
          max={maxBonus}
          // showButtons
          onChange={(e) => update(e.value)}
          onClick={(e) => op.current.toggle(e)}
        />
        <label>{bonusName}</label>
      </span>
    </div>
  );
}
export default BonusInput;
