const fs = require('fs');
const axios = require('axios')


async function posts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  let post = JSON.stringify(response.data, null, 2);
  try{
    fs.writeFileSync('./result/posts.json', post);
    console.log('Success :File created')
  } catch (e){
    console.log(`Oops, an error occured ${e}`)
  }
}
posts();