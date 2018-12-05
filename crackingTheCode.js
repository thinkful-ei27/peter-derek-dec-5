'use strict';
const sentence = 'craft block argon meter bells brown croon droop';

const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
    decode: function (word) {
      if (this.hasOwnProperty(word[0])) {
        return word[this[word[0]]- 1];
      } else {
        return ' '; 
      }
    },
    decodeWords: function (sentence) {
      const words = sentence.split(" ");
      return words.map(word => {
        return this.decode(word);
      }).join('');
    }
};