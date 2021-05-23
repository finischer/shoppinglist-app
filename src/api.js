import axios from 'axios';


export async function signup(user) {
  return await
    axios({
        method: 'post',
        url: " https://famlist-backend.herokuapp.com/api/signup",
        data: user,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then( response => {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    })
}












