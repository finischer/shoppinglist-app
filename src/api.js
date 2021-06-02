import axios from 'axios';

axios.defaults.baseURL = 'https://famlist-backend.herokuapp.com/api'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

export async function signup(user) {
    console.log(user)
    return await
    axios({
        method: 'post',
        url: "/signup",
        data: user,
    })
    .then( response => {
        console.log(response)
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


export async function getShoppinglistsFromUser(user){
    const userID = user._id
    
    return await
        axios({
            method: 'get',
            url: `/user/${userID}/shoppinglists`
        })
        .then( response => response )
        .catch( error => console.error(error))
}

export async function getShoppinglist(shoppinglist_id){
      return await
        axios({
            method: 'get',
            url: `/shoppinglist/get/${shoppinglist_id}`
        })
        .then( response => response )
        .catch( error => console.error(error))
}


export async function updateShoppinglist(shoppinglist){
    const shoppinglistID = shoppinglist._id

    return await
        axios({
            method: 'put',
            url: `/shoppinglist/${shoppinglistID}`,
            data: shoppinglist
        })
        .then( response => response)
        .catch( error => console.error(error))
}

export async function addProductToShoppinglist(shoppinglistID, data){
    return await
        axios({
            method: 'post',
            url: `/product/${shoppinglistID}`,
            data: data
        })
        .then(response => response)
        .catch( error => console.error(error))
}


export async function addShoppinglistByName(user, new_shoppinglist){
    const userID = user._id

    return await
        axios({
            method: 'post',
            url: `/shoppinglist/${userID}`,
            data: new_shoppinglist
        })
        .then(response => response)
        .catch(error => console.error(error))
}

export async function addShoppinglistByID(user_id, shoppinglist_id){
    
    const data = {
        user_id,
        items: {
            _id: null,
            product_name: null
        },
        checked: null,
    }
    console.log(user_id)
    return await
        axios({
            method: 'put',
            url: `/shoppinglist/${shoppinglist_id}`,
            data
        })
        .then(response => response)
        .catch(error => console.error(error))
}


export async function getProducts(shoppinglist_id){
    
    return await
        axios({
            method: 'get',
            url: `/products/${shoppinglist_id}`
        })
        .then(response => response)
        .catch(error => console.error(error))
}



export async function getUser(user_id){
    return await
        axios({
            method: 'get',
            url: `/user/${user_id}`
        })
        .then(response => response)
        .catch(error => console.error(error))
}















