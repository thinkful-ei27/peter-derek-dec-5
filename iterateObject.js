'use strict';

const myObj = {
  foo: 'Maine',
  bar: 420,
  fum: 'California',
  quux: [1, 2, 3],
  spam: 'This is a pop-up ad! HA!'
}

for (const key in myObj) {
  console.log(key, myObj[key]);
}