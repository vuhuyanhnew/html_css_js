import axios from "axios"
async function fetch() {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(result.data)
}
fetch();
