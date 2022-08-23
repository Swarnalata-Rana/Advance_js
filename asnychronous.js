const fun1=()=>{
    console.log("Hello World")
}
const fun2=()=>{
    setTimeout(()=>{
        console.log("Thank you!!!");
    },5000)
    fun1()
    console.log("Your world is very Nice")
}
fun2()

// o/p-Hello world
// Your world is very Nice
// Thank you!!