let name={
    firstName:"Runu",
    lastName:"Rana",
}
let printFullName=function(hometown,state){
    console.log(this.firstName+" "+this. lastName+" "+"from"+" "+hometown+" , "+state)
}
printFullName.call(name,"jajpur","odisha")
let name2={
        firstName:"barsha",
        lastName:"parida"
}
// function borring
printFullName.call(name2,"mumbai","maharastra")


// normal question
// const obj={name:"runu", age:22}
// function show (){
//     console.log(this.name , this.age)
// }
// show.call(obj)