const startTime = performance.now();
for(let i = 0; i < 50 ; i++){
    console.log(i)
}

const endTime = performance.now();

console.log(`This function took time ${endTime - startTime} ms`)


// option 2 : 

console.time('task');

for (let i = 0; i < 5000 ; i++){
    console.log(i);
}

console.timeEnd('task')