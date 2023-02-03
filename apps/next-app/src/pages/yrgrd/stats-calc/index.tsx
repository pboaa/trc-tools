import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import styled from '@emotion/styled';

import {
  BonusTable,
  EquipTable,
  Job,
  JOB_LIST,
  MAX_LEVEL,
} from '@trc-tools/yrgrd/data';
import { Chara, Equipment } from '@trc-tools/yrgrd/stats-calc';
import { StatsTable } from '../../../components/StatsTable';
import { BonusInput } from '../../../components/BonusInput';
import { EquipSelect } from '../../../components/EquipSelect';
import { EquipPanel } from '../../../components/EquipPanel';
import { BonusPanel } from '../../../components/BonusPanel';

const StyledPage = styled.div`
  .app {
    max-width: 360px;
  }
  .col {
    padding: 0.5rem;
  }
`;

export function Index() {
  const [chara, setChara] = useState<Chara>(new Chara());

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

  const setNewChara = (chara: Chara) => {
    const newChara = new Chara({
      job: chara.job,
      level: chara.level,
      bonuses: chara.bonuses,
      equips: chara.equips,
    });
    setChara(newChara);
  };
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
        <StatsTable chara={chara} />
        {chara.job}
        <div className="grid">
          <div className="col-8">
            <span className="p-float-label">
              <Dropdown
                value={chara.job}
                options={jobOptions}
                optionLabel={''}
                onChange={(e) => {
                  chara.job = e.value;
                  setNewChara(chara);
                }}
                // valueTemplate={selectedTemplate}
                // itemTemplate={optionTemplate}
              />
              <label>Job</label>
            </span>
          </div>
          <div className="col-4">
            <span className="p-float-label">
              <Dropdown
                value={chara.level}
                options={levelOptions}
                optionLabel={''}
                onChange={(e) => {
                  chara.level = e.value;
                  setNewChara(chara);
                }}
              />
              <label>Level</label>
            </span>
          </div>
        </div>

        <BonusPanel chara={chara} setChara={setNewChara} />
        <EquipPanel chara={chara} setChara={setNewChara} />
      </div>
    </StyledPage>
  );
}

export default Index;
