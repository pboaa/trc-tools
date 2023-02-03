import { useRef } from 'react';
import { Tooltip } from 'primereact/tooltip';
import styled from '@emotion/styled';

import StatsTable from './StatsTable';
import {
  Chara,
  calcJobStats,
  calcBonusStats,
} from '@trc-tools/yrgrd/stats-calc';

export interface StatsLabelProps {
  value: number;
  statType: string;
}

export function StatsLabel(props: StatsLabelProps) {
  return (
    <span>
      <span className={`label-${props.statType}`}>{props.value}</span>
      <Tooltip target={`.label-${props.statType}`}>{props.statType}</Tooltip>
    </span>
  );
}
export default StatsLabel;
