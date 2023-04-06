
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
  const newObj = {...user, ...jobInfos};
  console.log(`Hi, my name is ${newObj.name}, I'm ${newObj.age} years old and I'm ${newObj.nationality}. I work as a ${newObj.profession} and my squad is ${newObj.squadInitials}-${newObj.squad}`)