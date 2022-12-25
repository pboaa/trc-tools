import {
  Job,
  jobsJson,
  jobBaseStats,
  StatsTable,
  StatArr,
} from '@trc-tools/yrgrd/data';

function getJobJsonValue(job: Job) {
  const jsonObj = jobsJson.find((obj) => obj.name === job);
  if (!jsonObj) {
    throw new Error(`Error`);
  }

  return {
    jsonBase: { ...jsonObj.base, ...jobBaseStats },
    jsonGrow: jsonObj.grow,
  } as {
    jsonBase: Partial<StatsTable>;
    jsonGrow: Partial<StatsTable>;
  };
}
export function calcJobStats(job: Job, level: number) {
  const stats: Partial<StatsTable> = {};

  const { jsonBase, jsonGrow } = getJobJsonValue(job);

  StatArr.forEach((key) => {
    const base = jsonBase[key] ?? 0;
    const grow = jsonGrow[key] ?? 0;
    const lv = level - 1;
    if (!base && !grow) return;

    switch (key) {
      case 'hp':
      case 'ap':
        stats[key] = Math.floor(base + grow * lv);
        break;
      case 'atk':
      case 'def':
      case 'matk':
      case 'mdef':
        stats[key] = Math.floor(base + grow + grow * lv);
        break;
      default:
        stats[key] = base;
        break;
    }
  });

  return stats;
}
