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
        window.location = '/login' 
    })
    .catch(function (error) {
        console.error(error)
    })
}


export async function login(user) {
   return await
      axios({
          method: 'post',
          url: "/login",
          data: user,
      })
      .then( response => response)
      .catch(function (error) {
          return console.error(error)
      })
  }















