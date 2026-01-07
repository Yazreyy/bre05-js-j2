let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];



function countActiveUsers(users) {
    let count = 0;
    
    for( let user of users){
        if(user.isActive === true){
            count++;
        }
    }

    return count;
}
function getActiveUsers(users) {
  let activeUsersList = [];

  for(let user of users){
     if(user.isActive === true){
        activeUsersList.push(user);
     }
  }
  return activeUsersList;
}
function hasBlueEyes(activeUsers) {
   let count = 0
  
   for(let activeUser of activeUsers){
    if(activeUser.eyeColor === "blue"){
       count++;
    }
   }
   return count;
}
function getActiveUsersAges(activeUsers) {
  let agesList = [];

  for(let user of activeUsers){
    agesList.push(user.age)
  }
  
  return agesList;
}
function computeActiveUsersAverageAge(ages) {
  let somme = 0;

  for(const age of ages){
   somme = somme + age
  }

  if (ages.length === 0){
    return 0;
  }

  let average = somme /ages.length
  return average;
}
function MultronToCenturia(users) {
let majcount = 0;

for(let user of users){
   if(user.company === "MULTRON"){
      user.company = "CENTURIA"
   
   majcount++;
   }
}
   return majcount;
}

function getBrownEyedUsers(users) {
  let count = 0;

  for(let user of users){
    if(user.eyeColor === "brown" && user.company !== "CENTURIA")
        {
       count++;
    }
   }
   return count;
}

function generateFullEyeColorStats(users) {
    const statsReport = {}; 
    const uniqueColors = [...new Set(users.map(user => user.eyeColor))];
    for (const color of uniqueColors) {
        
  
        const activeCount = users.filter(user => 
            user.eyeColor === color && user.isActive === true
        ).length;

  
        const inactiveCount = users.filter(user => 
            user.eyeColor === color && user.isActive === false
        ).length;

       
        statsReport[color] = {
            active: activeCount,
            inactive: inactiveCount
        };
    }

    return statsReport;
}

const finalReport = generateFullEyeColorStats(users);
const usermajcount = MultronToCenturia(users);
const activeList = getActiveUsers(users);
const totalActive = activeList.length; 
const blueEyesCount = hasBlueEyes(activeList);
const BrownEyesCount = getBrownEyedUsers(users);

const activeAges = getActiveUsersAges(activeList); 
const averageAge = computeActiveUsersAverageAge(activeAges);




console.log(`Il y a ${ countActiveUsers(users) } utilisateurs actifs.`);
console.log(`Il y a ${totalActive} utilisateurs actifs, ${blueEyesCount} ont les yeux bleus.`);
console.log(`Il y a ${totalActive} utilisateurs actifs , la moyenne d'âge est de ${averageAge}`)
console.log(`${usermajcount} ont migré vers Centuria`)
console.log(`${BrownEyesCount} utilisateurs avec les yeux marrons ne travaillent pas à Centuria`);
console.log("--- RAPPORT FINAL PAR COULEUR ET STATUT ---");
console.log(finalReport);