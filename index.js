const startTime = performance.now();
for(let i = 0; i < 50 ; i++){
    // console.log(i)
}

const endTime = performance.now();

// console.log(`This function took time ${endTime - startTime} ms`)


// option 2 : -----

// console.time('task');

for (let i = 0; i < 5000 ; i++){
    // console.log(i);
}

// console.timeEnd('task')


// Abstract way -------------

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 6000000; i++){
    if( i < 3000000 ){
        firstArray.push(i);
    }
    secondArray.push(i);
}


// console.log("first array",firstArray.length)
// console.log("second array",secondArray.length);


// data gula map kore time complexity ber korbo------------

console.time("map1");

const firstArrayList = firstArray.map((number) => ({userID: number}));

console.timeEnd("map1");

console.time("map2");

const secondArrayList = secondArray.map((number) => ({userID: number}));

console.timeEnd("map2");



//  -------------data find kore time complexity nirnoi------------

console.time("find");

const user = secondArrayList.find((user) => user.userID === 50000000);

console.timeEnd("find")