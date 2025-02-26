let obj = {
    name:"Avijit Ghoshal",
    class:"B Tech",
    myFunction:function(){
        console.log(this)
        console.log(this.name,this.class)
        console.log("I am method inside object")
    }
    

}
console.log(obj.myFunction())
console.log(obj.subjects)

//lets suppos you have one num as input you have to check if num is multiply of 3 than print"fizz",  if numis multiplyof 5 than print"buzz".if num is multiply of both 3 and 5 than print fizzbuzz


let num = 60;
if(num%3==0 && num%5!=0){
    console.log("Fizz");
}
if (num%3!=0 && num%5==0){
    console.log("Buzz");
}
if(num%3==0 && num%5==0){
    console.log("Fizz Buzz")
}



//for loop

//for(Start;condition; inc/dec;)
//     logic
//}



let Num =10;
for (let i=0; i<Num;i++){
    console.log(i, Num)
}

let arr=[1,2,3,4,5,6,7,8]

for(let i=1; i<=arr.length; i++){
    console.log(arr[i])
}


let str = "Avijit Ghoshal";

for(let i=0; i<str.length; i++){
    console.log(str[i])
}