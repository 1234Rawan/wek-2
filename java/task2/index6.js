let start = 0;
let swappedName = "elZerO";
let changeChar=[];
for( i=start;i<swappedName.length;i++){
    if(swappedName[i]==swappedName[i].toUpperCase()){
        changeChar.push(swappedName[i].toLowerCase());
}
else {
    changeChar.push(swappedName[i].toUpperCase());
}
}
console.log(changeChar.join(""));
//output