import Bowerman from '../bowerman';

test('Проверяем работу Bowerman', () => {
  const unit = new Bowerman('Иван');
  const expected = {
    name: 'Иван', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };

  expect(unit).toEqual(expected);
});
