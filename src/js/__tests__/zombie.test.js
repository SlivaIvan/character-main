import Zombie from '../zombie';

test('Проверяем работу Zombie ', () => {
  const unit = new Zombie('Иван');
  const expected = {
    name: 'Иван', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };

  expect(unit).toEqual(expected);
});
