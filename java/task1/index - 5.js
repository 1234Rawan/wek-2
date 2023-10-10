let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if(haystack.includes(needle)){
    console.log("found")
}
if(needle===haystack[1]){
    console.log("found")
}
if(haystack.indexOf(needle)){
    console.log("found")
}