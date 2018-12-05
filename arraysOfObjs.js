const tonyStark = {
  name: 'Tony Stark',
  jobTitle: 'Iron Man'
}

const steveRogers = {
  name: 'Steve Rogers',
  jobTitle: 'Captain America'
}

const bruceBanner = {
  name: 'Bruce Banner',
  jobTitle: 'The Hulk'
}

const nickFury = {
  name: 'Nick Fury',
  jobTitle: 'Director of Shield'
}

const avengers = [tonyStark, steveRogers, bruceBanner, nickFury];

avengers.forEach(avenger => console.log(avenger.name, avenger.jobTitle));
