


// scenario based activity holo kaj e lage  group wise data alada korte like niche class wise data alada kora hoyece [

//todo const students = [
 //todo { name: "Rahim", class: "10", marks: 85 },
 //todo { name: "Karim", class: "9", marks: 78 },
 //todo { name: "Nila", class: "10", marks: 92 },
 //todo { name: "Sima", class: "9", marks: 80 }
//todo];

//   const groupedByClass = students.reduce((groups, student) => {
//   const key = student.class;
//   if (!groups[key]) {
//     groups[key] = [];
//   }
//   groups[key].push(student);
//   return groups;
// }, {});

// console.log(groupedByClass);


// -----------output------------

// {
//   "10": [
//     { name: "Rahim", class: "10", marks: 85 },
//     { name: "Nila", class: "10", marks: 92 }
//   ],
//   "9": [
//     { name: "Karim", class: "9", marks: 78 },
//     { name: "Sima", class: "9", marks: 80 }
//   ]
// }




// ]





const fakeCount = [
    "A",
    "B",
    "A",
    "C",
    "D",
    "C",
    "B",
    "E",
    "C"
]

const count = fakeCount.reduce((table, response) =>{

    // rule 01
    if(table[response]){
        table[response] = table[response] + 1;
    }else{
        table[response] = 1;
    }

    // rule 02
    // table[response] = (table[response] || 0) + 1;

    return table;
},{})


console.log(count)     /// output ----{ A: 2, B: 2, C: 3, D: 1, E: 1 }









