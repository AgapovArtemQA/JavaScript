for(let b=1; b<11; b++){
console.log (2**b)
}
   
 
   function Stepen(i){
while(i<11 && i>0){
console.log(2**i)
break;}
 }
 Stepen(5)


 let a = ":)";
 let result = " ";
 for (b = 1; b < 6; b++){
  result+=a
      console.log (result)}


let result=1;
 while(a<25){
 result=result*3
 a++
 }
 console.log(result);
 let k=1;
 let n=1;
 while(k<26) {
 n*=4
 k++
 }
 console.log(n)


 let result = " ";
 function printSmile(stroka, numberOfRows){
  for(let i=1;i<=numberOfRows;i++){
  result+=stroka;
  console.log(result);
 }
 }
 printSmile(':((', 2)


 let n=0;
 let k=0;
 function getWordStructure(word){
   let gl=['A','a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u','Y', 'y']
   let sogl=['B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'J', 'j', 'H', 'h', 'G', 'g', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Z', 'z']
   for (i=0; i < word.length; i++){
for(j=0;j < gl.length;j++){
  if(word[i]===gl[j]){
    n++
    break;
  }
  }
  for(y=0;y < sogl.length;y++){
    if(word[i]===sogl[y]){
      k++;
      break;
    }
  }
    console.log ('Слово '+word+' состоит из '+ n +' гласных и '+ k +' согласных букв ')
  }
}
 getWordStructure('dartu')
