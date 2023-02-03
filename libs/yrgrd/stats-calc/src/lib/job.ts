import {
  Job,
  jobsJson,
  jobBaseStats,
  StatsTable,
  STAT_LIST,
} from '@trc-tools/yrgrd/data';

export function getJobJsonValue(job: Job) {
  const json = jobsJson.find((obj) => obj.name === job);
  if (!json) {
    throw new Error(`Error: Invalid job name`);
  }
  return {
    jsonBase: { ...json.base, ...jobBaseStats },
    jsonGrow: json.grow,
  } as {
    jsonBase: Partial<StatsTable>;
    jsonGrow: Partial<StatsTable>;
  };
}

export function calcJobStats(job: Job, level: number) {
  const stats: Partial<StatsTable> = {};
  const { jsonBase, jsonGrow } = getJobJsonValue(job);

  STAT_LIST.forEach((key) => {
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
