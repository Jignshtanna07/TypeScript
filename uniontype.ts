// ubion is combination two or three datatypes.
let score : number | string = "jignesh"
console.log(score)
score =5;
console.log(score)

type User = {
    name :string,
    isActive :boolean
}


type Admin = {
    name :string,
    id:number
}
 
let userOne : User | Admin = {
    name :"Jignesh Tanna",
    id:53
}
console.log(userOne)
//   for example of pi this is new in typescript
    let pi:3.14 = 3.14 //type is 3.14
    // pi=145 
export {}