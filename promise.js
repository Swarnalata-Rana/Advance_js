const prom=new Promise((resolve,reject)=>{
    var a=8
    if(a==8){
        resolve("yes")
    }
    else{
        reject("no")
    }
    }
    )
    prom.then((massege)=>{
        console.log(massege)
    
    })
    .catch((massege)=>{
        console.log(massege)
    })
// o/p-yes

//promise are useing callback hell handel
//callback hell code

setTimeout(()=>{
    console.log("Called to HR");
    setTimeout(()=>{
        console.log("HR to Directer");
        setTimeout(()=>{
            cosole.log("Information Update");
        },1000);
    },1000);
},2000);

//Overcame kariba pain Promise use karantni.
