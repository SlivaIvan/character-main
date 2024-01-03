export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('имя должно содержать от 2 до 10 сиволов');
    }
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('тип не установлен');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж умер');
    }
  }
}
