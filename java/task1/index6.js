let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];


allArrs=arr1.concat(arr2).sort();
allArrs=allArrs.splice(4,7);
console.log(allArrs); // fxy