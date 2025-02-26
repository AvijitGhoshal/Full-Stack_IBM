let str = "Avijit Ghoshal"

console.log(str.length)

str[3]="S"
console.log(str)


let svuClass = ["Avijit","B Tech",3,"Arka","B Tech",3]
console.log(svuClass)


const obj = {
    Avijit:{class:"B Tech",year:3,RN:64,subject:["DBMS","IM","CN"]},
    Arka:{class:"B Tech",year:3,RN:63,subject:["DBMS","IM","CN"]},
    1:"SVU"
    
}
console.log(obj.Avijit)
console.log(obj.Arka)

obj["1"]="Sudarsan"

console.log(obj)

delete obj["Avijit"]

console.log(obj)