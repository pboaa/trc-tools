import { calcJobStats } from './job';

describe('yrgrdStatsCalc', () => {
  test('calcJobStats("mage", 60)', () => {
    const stats = calcJobStats('mage', 60);
    expect(stats).toEqual({
      hp: 192,
      ap: 202,
      atk: 50,
      def: 50,
      matk: 87,
      mdef: 80,
      hit: 5,
      flee: 5,
      critRate: 1,
      turnSpd: 4,
      dmgRange: 30,
    });
  });
});
