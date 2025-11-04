const arr = [1, 2, 3, 4, 5, [6,7,8]]

const flatArr = arr.flat();

console.log(flatArr)   //  ----output ---- [1, 2, 3, 4, 5, 6, 7, 8]


// jode multi nested arry hoi tahole array er quantity function er parameter hisebe call kore dite hoi jemon:

const arr2 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10,[11]]]]

const flatArr2 = arr2.flat(3);

console.log(flatArr2);  //------output ---[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]


// ----jode nested array beshe hoi like onek gula array hoi tahole (Infinity)  use korlei hoi.

const nestedArray = [1,2,3,[5,7,[2,[25,32,[28,42,55,[33,49,56,[20]]]]]]];

const flatNestedArray = nestedArray.flat(Infinity);

console.log(flatNestedArray)   // output ------[1,  2,  3,  5,  7,  2,25, 32, 28, 42, 55, 33,49, 56, 20]






const tagFormPosts = [
    ["javascript", "react","css"],
    ["node","express"],
    ["css","html","react"],
];


const filterTags = new Set(tagFormPosts.flat(Infinity));

const filterTagsArr = Array.from(filterTags)

console.log(filterTagsArr)