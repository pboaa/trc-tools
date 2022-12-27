import { useRef } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { OverlayPanel } from 'primereact/overlaypanel';

import { BonusTable, MAX_LEVEL } from '@trc-tools/yrgrd/data';

export interface BonusInputProps {
  bonusName: string;
  bonuses: Partial<BonusTable>;
  setBonuses: (e: Partial<BonusTable>) => void;
}

export function BonusInput(props: BonusInputProps) {
  const bonusName = props.bonusName;
  const bonuses = props.bonuses;

  const bonusValues = Object.entries(bonuses).map(([k, v]) => v);
  const sum = bonusValues.length
    ? bonusValues.reduce((sum, num) => (sum += num))
    : 0;
  const left = Math.max(0, MAX_LEVEL - 1 - sum);

  function update(value: number) {
    if (value > MAX_LEVEL - 1) value = MAX_LEVEL - 1;
    if (value < 0) value = 0;

    bonuses[bonusName] = value;
    props.setBonuses({ ...bonuses });
  }

  const op = useRef<OverlayPanel>(null);
  return (
    <div>
      <OverlayPanel ref={op}>
        <div className="grid">
          <div className="col">
            <Button onClick={(e) => update((bonuses[bonusName] ?? 0) - 10)}>
              -10
            </Button>
            <Button onClick={(e) => update((bonuses[bonusName] ?? 0) - 1)}>
              -1
            </Button>
            <Button onClick={(e) => update((bonuses[bonusName] ?? 0) + 1)}>
              +1
            </Button>
            <Button onClick={(e) => update((bonuses[bonusName] ?? 0) + 10)}>
              +10
            </Button>
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <Button onClick={(e) => update(0)}>0</Button>
            <Button onClick={(e) => update((bonuses[bonusName] ?? 0) + 100)}>
              Max
            </Button>
            <Button onClick={(e) => update((bonuses[bonusName] ?? 0) + left)}>
              {left.toString()}
            </Button>
          </div>
        </div>
      </OverlayPanel>

      <span className="p-float-label">
        <InputNumber
          className="bonus-input"
          value={props.bonuses[props.bonusName] ?? 0}
          min={0}
          max={MAX_LEVEL - 1}
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
