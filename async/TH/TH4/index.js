
import axios from "axios"
async function fetchPost(){
const result = await axios.get('http://jsonplaceholder.typicode.com/posts');
console.log(222, result)
}
fetchPost();