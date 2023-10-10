let start2 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i=start2;i<mix.length;i++){
    if(mix[i]==1||typeof mix[i] == "string" ){
        continue;
    }
    console.log(mix[i]);
}