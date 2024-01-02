import Deamon from '../daemon';

test('Проверяем работу Deamon', () => {
  const unit = new Deamon('Иван');
  const expected = {
    name: 'Иван', type: 'Deamon', health: 100, level: 1, attack: 10, defence: 40,
  };

  expect(unit).toEqual(expected);
});
