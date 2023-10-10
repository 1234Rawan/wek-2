let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let number=0;
number+=letter.length;
for(n=letter.length-letter.length;n<friends.length;n++){
    if(friends[n].startsWith(letter.toUpperCase())){
        continue;
    }
    console.log(`"${number} =>${friends[n]}"`);
   number++;
}