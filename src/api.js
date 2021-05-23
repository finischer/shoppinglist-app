import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://famlist-backend.netlify.app',
//     headers: {"Access-Control-Allow-Origin": "*"}
//   });

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export async function signup(user) {
  return await
    axios({
        method: 'post',
        url: " https://famlist-backend.herokuapp.com/signup",
        data: user
    })
    .then( response => {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    })
}












