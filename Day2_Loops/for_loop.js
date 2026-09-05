// for → while → do...while → for...of → for...in → break/continue → nested loops → array methods (map, filter, reduce, forEach)
let i = 0;
while(i < 10){
    console.log(i);
    i++;

}

const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}

const user = {
  name: "Jayesh",
  age: 22,
  city: "Jaipur"
};

for (const key in user) {
  console.log(key);
}


`
*       *
**     **
***   ***
*********
`
let n=5;

for(let i =0; i<n;i++){
    let p="";
    for(let j=0;j<=i;j++){
        p+="*";
    }
    for(let j=0;j<=(2*(n-i- 1)- 1); j++){
        p+=" ";
    }
    for(let j=0 ;j<=i;j++){
        p+="*";
    }
    console.log(p);
    
    
}
