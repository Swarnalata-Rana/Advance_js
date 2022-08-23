let name={
    firstname:"Runu",
    lastname:"Rana",
}
let printFullName=function(){
    console.log(this.firstname+" "+this.lastname)
}
printFullName.apply(name)
// o/pRunu Rana