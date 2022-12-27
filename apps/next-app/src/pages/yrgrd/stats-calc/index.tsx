import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import styled from '@emotion/styled';

import {
  BonusTable,
  Chara,
  Job,
  JOB_LIST,
  MAX_LEVEL,
} from '@trc-tools/yrgrd/data';
import { calcCharaStats } from '@trc-tools/yrgrd/stats-calc';
import { StatsTable } from '../../../components/StatsTable';
import { BonusInput } from '../../../components/BonusInput';

const StyledPage = styled.div`
  .app {
    max-width: 360px;
  }
  .col {
    padding: 0.5rem;
  }
`;

export function Index() {
  const [job, setJob] = useState<Job>('warrior');
  const [level, setLevel] = useState(MAX_LEVEL);
  const [bonuses, setBonuses] = useState<Partial<BonusTable>>({});
  const chara = new Chara({ job, level, bonuses });
  const stats = calcCharaStats(chara);

  const jobOptions = JOB_LIST.map((job) => ({
    label: job.charAt(0).toUpperCase() + job.slice(1),
    value: job,
  }));
  const levelOptions = [...Array(MAX_LEVEL)].map((_, i) => {
    const lv = i + 1;
    return {
      label: lv,
      value: lv,
    };
  });

  const selectedTemplate = (option, props) => {
    if (option) {
      return <div>abc{option.label}</div>;
    }
    return <span>{props.placeholder}</span>;
  };

  const optionTemplate = (option) => {
    return <div>abc{option.label}</div>;
  };

  return (
    <StyledPage>
      <div className="app">
        <StatsTable stats={stats} />

        <div className="grid">
          <div className="col-8">
            <span className="p-float-label">
              <Dropdown
                value={job}
                options={jobOptions}
                optionLabel={''}
                onChange={(e) => setJob(e.value)}
                // valueTemplate={selectedTemplate}
                // itemTemplate={optionTemplate}
              />
              <label>Job</label>
            </span>
          </div>
          <div className="col-4">
            <span className="p-float-label">
              <Dropdown
                value={level}
                options={levelOptions}
                optionLabel={''}
                onChange={(e) => setLevel(e.value)}
              />
              <label>Level</label>
            </span>
          </div>
        </div>
        <div className="grid">
          <div className="col">
            <BonusInput
              bonusName="pow"
              bonuses={bonuses}
              setBonuses={setBonuses}
            />
          </div>
          <div className="col">
            <BonusInput
              bonusName="con"
              bonuses={bonuses}
              setBonuses={setBonuses}
            />
          </div>
          <div className="col">
            <BonusInput
              bonusName="int"
              bonuses={bonuses}
              setBonuses={setBonuses}
            />
          </div>
          <div className="col">
            <BonusInput
              bonusName="agi"
              bonuses={bonuses}
              setBonuses={setBonuses}
            />
          </div>
          <div className="col">
            <BonusInput
              bonusName="dex"
              bonuses={bonuses}
              setBonuses={setBonuses}
            />
          </div>
          <div className="col">
            <BonusInput
              bonusName="luk"
              bonuses={bonuses}
              setBonuses={setBonuses}
            />
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
