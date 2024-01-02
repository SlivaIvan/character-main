import Swordsman from '../swordsman';

test('Проверяем работу Swordsman', () => {
  const unit = new Swordsman('Иван');
  const expected = {
    name: 'Иван', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };

  expect(unit).toEqual(expected);
});
