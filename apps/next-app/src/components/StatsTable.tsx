import styled from '@emotion/styled';
import StatsTableTd from './StatsTableTd';
import { Chara } from '@trc-tools/yrgrd/stats-calc';

const StyledPage = styled.div`
  .stats-table {
    width: 100%;
  }
`;

export interface StatsTableProps {
  chara: Chara;
}

export function StatsTable(props: StatsTableProps) {
  return (
    <StyledPage>
      {JSON.stringify(props.chara)}
      <div className="stats-table">
        <div className="grid">
          <div className="col">
            <StatsTableTd chara={props.chara} statName="hp" />
          </div>
          <div className="col">
            <StatsTableTd chara={props.chara} statName="ap" />
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <StatsTableTd chara={props.chara} statName="atk" />
          </div>
          <div className="col">
            <StatsTableTd chara={props.chara} statName="def" />
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <StatsTableTd chara={props.chara} statName="matk" />
          </div>
          <div className="col">
            <StatsTableTd chara={props.chara} statName="mdef" />
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <StatsTableTd chara={props.chara} statName="hit" />
          </div>
          <div className="col">
            <StatsTableTd chara={props.chara} statName="flee" />
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <StatsTableTd chara={props.chara} statName="critRate" />
          </div>
          <div className="col"></div>
        </div>
      </div>{' '}
    </StyledPage>
  );
}
export default StatsTable;
