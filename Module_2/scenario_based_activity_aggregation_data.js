// scenario_based_activity_aggregation_data   practice




const students = [
  { name: "Rahim", class: "10", marks: 85 },
  { name: "Karim", class: "9", marks: 78 },
  { name: "Nila", class: "10", marks: 92 },
  { name: "Sima", class: "9", marks: 80 },
  { name: "Rafi", class: "10", marks: 75 }
];


const aggregatedData = students.reduce((table, response) =>{
    
    const {class: studentClass, marks,name} = response

   if(!table[studentClass]) {
      table[studentClass] = {  totalMarks : 0}
    }

    table[studentClass].totalMarks += marks;
    


    return table;
},{})

console.log(aggregatedData)

//----------output : -----{
//   '9': { totalMarks: 158, marks: 0 },
//   '10': { totalMarks: 252, marks: 0 }
// }

// class onuzaye totalmark 


// kon class e ke first hoise:

const highestClassByStudent = students.reduce((table, student) => {
  const {name, marks, class: studentClass} = student;

  if(!table[studentClass]){
    table[studentClass] = student;
  }

  if(marks > table[studentClass].marks){
    table[studentClass] = student;
  }

  return table;
},{})


console.log(highestClassByStudent)


