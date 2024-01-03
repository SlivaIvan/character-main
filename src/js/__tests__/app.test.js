import Character from '../character';
import Bowerman from '../bowerman';

test('Проверяем работу родителя Character', () => {
  const unit = new Character('Иван', 'Bowerman');
  const expected = {
    name: 'Иван', type: 'Bowerman', health: 100, level: 1,
  };

  expect(unit).toEqual(expected);
});

test('Проверяем работу ошибки длинны имени', () => {
  function chTest() {
    const charactTest = new Character('ИвановИванИванович', 'Bowerman');
    return charactTest;
  }
  expect(chTest).toThrow('имя должно содержать от 2 до 10 сиволов');
});

test('Проверяем работу ошибки длинны имени', () => {
  function chTest() {
    const charactTest = new Character('Иван', 'Boweman');
    return charactTest;
  }
  expect(chTest).toThrow('тип не установлен');
});

test('level up', () => {
  const bowerman = new Bowerman('Иван');
  const expected = {
    name: 'Иван',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  bowerman.levelUp();
  expect(bowerman).toEqual(expected);
});

test('check Character error type', () => {
  expect(() => {
    const bowerman = new Bowerman('Иван');
    bowerman.health = 0;
    bowerman.levelUp();
  }).toThrow('нельзя повысить левел умершего');
});

test('изменение жизни персонажа после урона', () => {
  const bowerman = new Bowerman('Иван');
  bowerman.damage(10);
  const expected = {
    name: 'Иван',
    type: 'Bowerman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(expected);
});

test('изменение жизни персонажа после урона - вывод ошибки при health < 0', () => {
  expect(() => {
    const bowerman = new Bowerman('Иван');
    bowerman.health = -1;
    bowerman.damage(10);
  }).toThrowError('Персонаж умер');
});
