import axios from 'axios';



axios.defaults.baseURL = 'https://famlist-backend.herokuapp.com/api'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

export async function signup(user) {
  return await
    axios({
        method: 'post',
        url: "/signup",
        data: user,
    })
    .then( response => {
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
}












