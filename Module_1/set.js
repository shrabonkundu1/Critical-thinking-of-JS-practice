const arr = ["shrabon", "Rima", "Ritu", "Rumpa", "Rinta", "Rima", "jeet", "Shompa", "jeet", "shrabon"];

const set = new Set(arr);

console.log(set)

const setArr = [...set];


console.log(setArr)

//***set er kaj hocce data er duplication remove kora ata use hoi data search er khetre  */


// data khojar jonno set.has("jeet")

//  data delete er jonno set.delete("Rumpa");



// just foreach kore duplicate remove ---


// brute force
const removeDuplicateArr = (arr) => {
    const newArr = [];

    arr.forEach(element => {
       if(!newArr.includes(element)){
        newArr.push(element);
       } 
    });

    return newArr;

}

console.log(removeDuplicateArr(arr))


// set use kore duplicate removef--------

const removeDupSet = (arr) => {
    const set = new Set(arr);
    
    const removeArr = [...set];

    return removeArr;
}

console.log(removeDupSet(arr))



// athoba


const removeDupArr2 = (arr) =>{

    const set = new Set(arr);

    return Array.from(set);

}

console.log("removeDupArr2",removeDupArr2(arr))