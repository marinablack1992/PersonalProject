import axios from 'axios';

const initialState = {
    user: {},
    newUser: {},
    userProps: {}
  
}

const GET_USER_INFO = "GET_USER_INFO"
const SET_USER_TYPE = "SET_USER_TYPE"
const ADD_PROPERTY = "ADD_PROPERTY"
const GET_USER_PROPERTIES = "GET_USER_PROPERTIES"

//get actions:

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

export function getUserProperties(id){
    const userProps = axios.get(`/api/${id}/userproperties`)
    .then(response => {
        return response.data
    })

    return {
        type: GET_USER_PROPERTIES,
        payload: userProps
    }
}


//create actions:

export function setUser(id, type) {
    console.log('action has fired')
    const newData = axios.post(`/api/setuser/${id}/${type}`)
        .then(response => {
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
    switch (action.type) {
        case GET_USER_INFO + "_FULFILLED":
            return Object.assign({}, state, { user: action.payload })

        case GET_USER_PROPERTIES + "_FULFILLED":
            return Object.assign({}, state, { userProps: action.payload})

        case SET_USER_TYPE + "_FULFILLED":
            console.log('set type', action.payload)
            return Object.assign({}, state, { newUser: action.payload })


        default:
            return state;
    }
}