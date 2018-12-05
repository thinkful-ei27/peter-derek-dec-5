'use strict';

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character) {
      let opponentDamage = character.defense > this.attack ? 0 : this.attack - character.defense;
      let yourDamage = this.defense > character.attack ? 0 : character.attack - this.defense;
      return `Your opponent takes ${opponentDamage} damage and you receive ${yourDamage} damage`;
    }
  };
}

const characters = [
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5), 
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragon son of Arathorn', 'aragon', 'Man', 'Dunnedain', 6, 8)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 5));

characters.find(character => character.nickname === 'aragon').describe();

const hobbits = characters.filter(character => character.race === 'Hobbit');

const attackers = characters.filter(character => character.attack > 5);

const characterWeapons = [
  ['gandalf', 'a wizard staff'],
  ['bilbo', 'the Ring'],
  ['frodo', 'the Barrow Blade'],
  ['aragon', 'the Anduril'],
  ['legolas', 'a Bow and Arrow'],
  ['arwen', 'the Hadhafang']
];
characterWeapons.forEach(characterWeapon => {
  let character = characters.find(character => character.nickname === characterWeapon[0]);
  character.weapon = characterWeapon[1];
  character.describe = function() {
    console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`); 
  };
});

characters[0].describe();
