import Magician from '../magician';

test('Проверяем работу Magician', () => {
  const unit = new Magician('Иван');
  const expected = {
    name: 'Иван', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };

  expect(unit).toEqual(expected);
});
