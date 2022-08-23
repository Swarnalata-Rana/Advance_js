
// // using fecth


// console.log("This is Tutorial 43");
// async function harry(){
//     console.log("Inside harry Function")
//     const response = await fetch('https://api.github.com/users/octocat');
//     console.log(response,"res");
//     const users = await response.json();
//     console.log(users,"users resolved")
//     // return users
//     // return "harry";
// }
// console.log("Before calling harry")
// let a=harry();
// console.log(a);
// a.then(data => console.log(data))


function resolveAfter_5_Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter_5_Seconds();
    console.log(result);
    // expected output: "resolved"
  }
asyncCall();
// op-calling
// resolved
  

