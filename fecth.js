const fetch = require('node-fetch');
async function getUser() {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()
    console.log(data)
}
  console.log("Runu");
  //   Execute async function
getUser()