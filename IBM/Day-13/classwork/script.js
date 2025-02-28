let arr =[1,2,3,4,5,6,7,8,9,10,"avijit","ghoshal",11,12,13,14,15,16]

// arr.forEach((el, index)=>{
//     console.log(el, index)
// }

// )

// map
// let output = arr.map((el, index)=>{
//     return el**2;
// });

// console.log(output)

// filter

// let output =arr .filter((el, index)=>{
//     return typeof el!=="string" && el%2==0;

// }).map((el, index)=>{
//     return el*2
// });

// console.log(output)

// reduce....
// let output =arr. reduce((acc, el)=>{
//     return acc+el
// }, 100 );

// console.log(output)

//  let arr1=[1,2,3,5,6,7,9,5,12,34,56,"arka","avijit","sujoy",10,23,45,6]

// let output= arr1 .filter((el, index)=>{
//     return typeof el !=="string"
// }) .map((el, index)=>{
//     return el*2
// });

// console.log(output)
let data=[
    {name:"watch",price:2000,rating:2},
    {name:"phone",price:21900,rating:4},
    {name:"shoe",price:1000,rating:5},
    {name:"car",price:100000,rating:5},
    {name:"earphone",price:1900,rating:4.5}
]

let ans= data.sort((a,b)=>{
    return b.price-a.price
})
console.log(ans)
// let ans = arr .sort((a,b)=>b-a);

//  console.log(ans)