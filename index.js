 function result(number){
    let n=number.length;
    let sum=0;
    let answer="";
    for(let i=0;i<n;i++){
        sum+=Number(number[i]);
    }
    for(let i=1;i<=sum;i++){
        if(i%4 === 0){
            answer+="Fizz ";
        }
        else if(i%5===0){
            answer+="Buzz ";
        }
        else if(i%4 === 0 && i%5===0 ){
            answer+="FizzBuzz ";
        }
        else{
            answer+=`${i} `;
        }
    }
    return answer;
 }

const output= result("9000000099");

console.log(output);


