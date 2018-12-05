'use strict';
const nickFury = {
  name: 'Nick Fury',
  jobTitle: 'Director of Shield'
};
const tonyStark = {
  name: 'Tony Stark',
  jobTitle: 'Iron Man',
  boss: nickFury
};

const steveRogers = {
  name: 'Steve Rogers',
  jobTitle: 'Captain America',
  boss: nickFury
};

const bruceBanner = {
  name: 'Bruce Banner',
  jobTitle: 'The Hulk',
  boss: nickFury
};

const avengers = [tonyStark, steveRogers, bruceBanner, nickFury];

avengers.forEach(avenger => {
  if (!(avenger.hasOwnProperty('boss'))) {
    console.log(`${avenger.jobTitle} ${avenger.name} doesn't report to anybody.`);
  } else {
    console.log(`${avenger.jobTitle} ${avenger.name} reports to ${avenger.boss.name}`);
  }
});