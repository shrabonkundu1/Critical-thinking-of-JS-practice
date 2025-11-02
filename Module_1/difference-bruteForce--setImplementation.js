function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Blueberry",
    "Apple",
    "Orange",
  ];

  const generatedData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }

  return generatedData;
}

const hugeDataSet = generateSimData(500000);
console.log("Data size", hugeDataSet.length);


// brtue force 

// const arrStartTime = performance.now();

// const removeDupArr = (arr) => {
//   const newArr = [];

//   arr.forEach((element) => {
//     if (!newArr.includes(element)) {
//       newArr.push(element);
//     }
//   });

//   return newArr;
// };

// console.log(removeDupArr(hugeDataSet));

// const arrEndTime = performance.now();

// console.log(`Array Implementation took ${arrEndTime - arrStartTime}ms`);

const arrStartTime = performance.now();

const removeDuparr = (arr) => {

  const newArr = [];

  arr.forEach((element) => {
    if(!newArr.includes(element)){
      newArr.push(element)
    }
  })

}

  console.log(removeDuparr(hugeDataSet));

  const arrEndTime = performance.now();

  console.log(`Array Implementation time took ${arrEndTime - arrStartTime}ms`)



// Set Implementation

// const setStartTime = performance.now();

// const removeDupSet = (arr) => {
//   const set = new Set(arr);

//   return Array.from(set);
// };

// console.log(removeDupSet(hugeDataSet));

// const setEndTime = performance.now();

// console.log(`Set Implementation took ${setEndTime - setStartTime}ms`);


const startTime = performance.now();

const removeDupSet = (arr) =>{

  const set = new Set(arr);

  return Array.from(set);
}

console.log(removeDupSet(hugeDataSet));

const endTime = performance.now();

console.log(`set Implementation took ${endTime - startTime}ms`)
