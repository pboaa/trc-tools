import { StatsTable } from '@trc-tools/yrgrd/data';

import styled from '@emotion/styled';
import StatsTableTd from './StatsTableTd';

const StyledPage = styled.div`
  .stats-table {
    width: 100%;
  }
`;

export interface StatsTableProps {
  stats: Partial<StatsTable>;
}

export function StatsTable(props: StatsTableProps) {
  const stats = props.stats;

  const table = (
    <div className="stats-table">
      <div className="grid">
        <div className="col">
          <StatsTableTd statName="hp" stats={stats} />
        </div>
        <div className="col">
          <StatsTableTd statName="ap" stats={stats} />
        </div>
      </div>{' '}
      <div className="grid">
        <div className="col">
          <StatsTableTd statName="atk" stats={stats} />
        </div>
        <div className="col">
          <StatsTableTd statName="def" stats={stats} />
        </div>
      </div>{' '}
      <div className="grid">
        <div className="col">
          <StatsTableTd statName="matk" stats={stats} />
        </div>
        <div className="col">
          <StatsTableTd statName="mdef" stats={stats} />
        </div>
      </div>{' '}
      <div className="grid">
        <div className="col">
          <StatsTableTd statName="hit" stats={stats} />
        </div>
        <div className="col">
          <StatsTableTd statName="flee" stats={stats} />
        </div>
      </div>{' '}
      <div className="grid">
        <div className="col">
          <StatsTableTd statName="critRate" stats={stats} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
  return <StyledPage> {table}</StyledPage>;
}
export default StatsTable;
