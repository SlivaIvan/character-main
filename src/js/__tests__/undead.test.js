import Undead from '../undead';

test('Проверяем работу Undead', () => {
  const unit = new Undead('Иван');
  const expected = {
    name: 'Иван', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };

  expect(unit).toEqual(expected);
});
