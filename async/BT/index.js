import axios from "axios"
async function fetch() {
    const result = await axios.get("https://pokeapi.co/");
    console.log(result.data)
}
fetch();
