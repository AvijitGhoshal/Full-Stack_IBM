//Asynchronous behavior


let name = "synchronous";

console.log(name);

let surName = "code";

console.log(surName);


setTimeout(()=>{
    console.log('setTimeout Task,Macrotask')
},2000)


setTimeout(()=>{
    console.log('setTimeout Task,Macrotask-2')
},3000)

let myPromise = new Promise((resolves,reject) =>{
    let flag = true;
    if(flag){
        resolves("Promise resolved successfully");
    }else{
        reject("Promise rejected")
    }
});

console.log(myPromise);


setTimeout(()=>{
    console.log('setTimeout Task,Macrotask-3')
},1000)


queueMicrotask(()=>console.log('QueueMicrotask Task,Macrotask'))

console.log(name,surName);