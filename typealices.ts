type User ={
    readonly id:number,
    name:string,
    email:string,
    isActive:boolean
}
let myUser:User = {
    id:98745622,
    name:"Jignesh Tanna",
    email:"jignesh.tanna@gmail.com",
    isActive:false
}
function createUser(u:User){
   console.log("this is function that we have to test with "+  u.name + "ka bro "+ u.id)
}
createUser(myUser)