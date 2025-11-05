const postArray = [
  {
    "id": 1,
    "title": "The Art of Focus",
    "author": "James Miller"
  },
  {
    "id": 2,
    "title": "Journey to the Unknown",
    "author": "Sophia Anderson"
  },
  {
    "id": 3,
    "title": "Code and Creativity",
    "author": "Liam Carter"
  },
  {
    "id": 4,
    "title": "Mindful Productivity",
    "author": "Olivia Turner"
  },
  {
    "id": 5,
    "title": "Beyond the Horizon",
    "author": "Ethan Parker"
  }
]


const lookUpTable = postArray.reduce((table, post) => {
     table[post.id] = post;

     return table;
}, {})


console.log(lookUpTable)

// - ------- output is :  {
//   '1': { id: 1, title: 'The Art of Focus', author: 'James Miller' },
//   '2': { id: 2, title: 'Journey to the Unknown', author: 'Sophia Anderson' },
//   '3': { id: 3, title: 'Code and Creativity', author: 'Liam Carter' },
//   '4': { id: 4, title: 'Mindful Productivity', author: 'Olivia Turner' },
//   '5': { id: 5, title: 'Beyond the Horizon', author: 'Ethan Parker' }
// }  



///--------- lookup table ta kivabe kaj kore-

//* normally amra jokhon kono kicu find korbo tokhon setar object notation hobe O(n)
//* but lookup table thakle amar alada je id ta ace oita diye lookup["10"] dile O(1)

const startTime1 = performance.now();
const post = postArray.find((post) => post.id === 5)
const endTime1 = performance.now();


const timeComparison = endTime1 - startTime1;

console.log(post, timeComparison)   // ---output --{ id: 5, title: 'Beyond the Horizon', author: 'Ethan Parker' } 0.03509999999999991


const startTime2 = performance.now();
const post2 = lookUpTable["2"];
const endTime2 = performance.now();
const timeComparison2 = endTime2 - startTime2;


console.log(post2, timeComparison2)  //------output ---{ id: 2, title: 'Journey to the Unknown', author: 'Sophia Anderson' } 0.0024999999999977263