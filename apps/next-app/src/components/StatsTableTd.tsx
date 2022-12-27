import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import styled from '@emotion/styled';

import StatsTable from './StatsTable';

const StyledTd = styled.div`
  span:last-child {
    border: 1px white solid;
    float: right;
  }
`;

export interface StatsTableTdProps {
  statName: string;
  stats: Partial<StatsTable>;
}

export function StatsTableTd(props: StatsTableTdProps) {
  const op = useRef<OverlayPanel>(null);
  return (
    <StyledTd>
      <span>{props.statName}</span>
      <span className="target" onClick={(e) => op.current.toggle(e)}>
        {props.stats[props.statName] ?? 0}
      </span>

      <OverlayPanel ref={op}>
        <div>Job:999</div>
        <div>Bonus:999</div>
        <div>Base:999</div>
        <div>
          Equip:999
          <div>Weapon:999</div>
          <div>Accessory:999</div>
        </div>
        <div>
          Buff:999
          <div>PowerUp:999</div>
        </div>
      </OverlayPanel>
    </StyledTd>
  );
}
export default StatsTableTd;
