// let name={
//         firstname:"Runu",
//         lastname:"Rana",
//         printfullname:function(){
//             console.log(this.firstname+" "+this.lastname)
//         }
//     }
//     name.printfullname()
//     //////
//     let name2={
//         firstname:"Rosy",
//         lastname:"Samala"
//     }
//     name.printfullname.call(name2)
// ///////
// let name={
//         firstname:"runu",
//         lastname:"runu"

const { strict } = require("assert")

// const { strict } = require("assert")

        
//     }
//         printfullname=function(){
//         console.log(this.firstname+" "+this.lastname)
//     }
//     printfullname.call(name)
///////
// let name={
//     firstname:"Runu",
//     lastname:"Rana",
// }
// let printFullName=function(hometown,state){
//     console.log(this.firstname+" "+this.lastname+" "+"from"+" "+hometown+" , "+state)
// }
// printFullName.call(name,"jajpur","odisha")
// let name2={
//         firstname:"barsha",
//         lastname:"parida"
// }
// // function borring
// printFullName.call(name2,"mumbai","maharastra")

// printFullName.apply(name2,["mumbai","mah/arastra"])
// bind methoed
// let printmyName=printFullName.call(name2,"mumbai","maharastra")
// console.log(printmyName)
// printmyName()
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
  // var a=0
  // var b=0
  // while(a<3){
  //   a++
  //   b+=a
  //   console.log(b)

//   // }
// "usestrict"
//   console.log(module.exports)
//     //module.exports global variable
// console.log(this == module.exports)
// usestrict

// let sum=()=>{
//     console.log(this)
// }
// sum()
  
//   function task(msg){
//     for(let i=100; i>0;i--){
//             console.log(msg)

//     }
//     // console.log()
    
//   }
//   console.log("first task")
//   task("task completaed")
//   console.log("end start")
// const fun2=()=>{
//     console.log("Nice to meet you")
// }
// const fun1=()=>{
//     setTimeout(()=>{
//         console.log("Hello World");
//     },5000)
//     fun2()
//     console.log("Your world is very Nice")
// }
// fun1()