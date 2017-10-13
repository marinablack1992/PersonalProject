import axios from 'axios';

const initialState = {
    auth_id:"",
    email:"",
    id:0,
    img:"",
    phone:"",
    prefcontact:"",
    status:"",
    user_name:"",
    tenant:""
  
}

const USER_CHECK = "USER_CHECK"
const GET_USER_INFO = "GET_USER_INFO"
const SET_USER_TYPE = "SET_USER_TYPE"
const ADD_PROPERTY = "ADD_PROPERTY"

//action builders:

export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(response => {
            return response.data
        })

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function setUser(id, type) {
    console.log('action has fired')
    const newData = axios.post(`/api/setuser/${id}/${type}`)
        .then(response => {
            console.log( "setuser response",response)
            return response.data
        }).catch((err) => console.log(err))

    return {
        type: SET_USER_TYPE,
        payload: newData
    }
}

export function addProperty(image, address, rent) {
    const newProp = axios.post(`/api/addProp/${image}/${address}/${rent}`)
    .then(response => {
        return response.data
    })

    return {
        type: ADD_PROPERTY,
        payload: newProp
    }
}

export default function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case GET_USER_INFO + "_FULFILLED":
            return Object.assign({}, state, { user: action.payload })

        case SET_USER_TYPE + "_FULFILLED":
            console.log('set type', action.payload)
            return Object.assign({}, state, { newUser: action.payload })


        default:
            return state;
    }
}