'use strict';
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    const results = this.store.heroes.find(hero => {
      for (let key in query) {
        if (!(key in hero)) {
          return false;
        } else if (query[key] !== hero[key]) {
          return false;
        }
      }
      return true;
    });
    if (results === undefined) {
      return null;
    } else {
      return results;
    }
  }
};

console.log(Database.findOne({ id: 2 }));

console.log(Database.findOne({id: 37}));

console.log(Database.findOne({id: 3, name: 'Aquaman'}));
