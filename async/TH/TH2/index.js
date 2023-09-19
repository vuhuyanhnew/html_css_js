import axios from 'axios';

const user = {
  name: 'vuhuyanhnew'
}

async function getUserProfile() {
  try {
    const githubUser = await axios.get(`https://api.github.com/users/${user.name}`);
    console.log(githubUser.data)
  } catch (err) {
    console.log(err.message)
  }
}

getUserProfile();