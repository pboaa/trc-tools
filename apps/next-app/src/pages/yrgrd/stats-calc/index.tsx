import { Job, JobArr } from '@trc-tools/yrgrd/data';
import { calcJobStats } from '@trc-tools/yrgrd/stats-calc';
import { useState } from 'react';

export function Index() {
  const [job, setJob] = useState<Job>('warrior');
  const [level, setLevel] = useState(60);
  const stats = calcJobStats(job, level);

  const jobOptions = JobArr.map((job) => {
    return (
      <option value={job} key={job}>
        {job}
      </option>
    );
  });
  const levelOptions = [...Array(60)].map((_, i) => {
    i += 1;
    return (
      <option value={i} key={i}>
        {i}
      </option>
    );
  });
  return (
    <div>
      <div>Job: {job}</div>
      <table>
        <thead></thead>{' '}
        <tbody>
          <tr>
            <td>HP: {stats.hp}</td>
            <td>AP: {stats.ap}</td>
          </tr>
          <tr>
            <td>Atk: {stats.atk}</td>
            <td>Def: {stats.def}</td>
          </tr>
          <tr>
            <td>Matk: {stats.matk}</td>
            <td>Mdef: {stats.mdef}</td>
          </tr>
          <tr>
            <td>Hit: {stats.hit}</td>
            <td>Flee: {stats.flee}</td>
          </tr>
          <tr>
            <td>CritRate: {stats.critRate}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <select value={job} onChange={(e) => setJob(e.target.value as Job)}>
        {jobOptions}
      </select>
      <select
        value={level}
        onChange={(e) => setLevel(parseInt(e.target.value))}
      >
        {levelOptions}
      </select>
    </div>
  );
}

export default Index;
