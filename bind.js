// const name={
//     firstName:"Swrnalata",
//     lastName:"Rana",
//     fullName:function(){
//         console.log(this.firstName, this.lastName)
//     }
// }
// console.log.bind(name.fullName())
// op-Swarnalata Rana

// with parametar
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
let myName=printFullName.bind(name2,"kuakhia","odisha")
myName()
// op-Runu Rana from jajpur , odisha
// barsha parida from kuakhia , odisha