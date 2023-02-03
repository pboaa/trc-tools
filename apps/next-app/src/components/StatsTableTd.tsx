import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import styled from '@emotion/styled';

import StatsTable from './StatsTable';
import {
  Chara,
  calcJobStats,
  calcBonusStats,
} from '@trc-tools/yrgrd/stats-calc';
import StatsLabel from './StatLabel';

const StyledTd = styled.div`
  span:last-child {
    border: 1px white solid;
    float: right;
  }
`;

export interface StatsTableTdProps {
  chara: Chara;
  statName: string;
}

export function StatsTableTd(props: StatsTableTdProps) {
  const op = useRef<OverlayPanel>(null);

  const jobStat = calcJobStats(props.chara.job, props.chara.level)[
    props.statName
  ];
  const bonusStat = calcBonusStats(props.chara.bonuses)[props.statName] ?? 0;
  const baseStat = jobStat + bonusStat;

  return (
    <StyledTd>
      <span>{props.statName}</span>
      <span className="target" onClick={(e) => op.current.toggle(e)}>
        {props.chara.stats[props.statName] ?? 0}
      </span>

      <OverlayPanel ref={op}>
        <div>
          <StatsLabel value={baseStat} statType="Base" />
          {'('}
          <StatsLabel value={jobStat} statType="Job" />
          {'+'}
          <StatsLabel value={bonusStat} statType="Bonus" />
          {')'}
        </div>
        <div>
          {Object.entries(props.chara.equips).map(([k, equip]) => (
            <div key={equip.name}>
              {equip.stats[props.statName]
                ? `${equip.name}: ${equip.stats[props.statName]}`
                : ''}
            </div>
          ))}
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
