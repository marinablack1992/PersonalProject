import axios from 'axios';

const initialState = {
    user: {},
    newUser: {},
    userProps: [],
    addTenant: {},
    newProp: {},
    prop: {},
    contactUpdate: {},
    editProp: {}

}

const GET_USER_INFO = "GET_USER_INFO"
const SET_USER_TYPE = "SET_USER_TYPE"
const ADD_PROPERTY = "ADD_PROPERTY"
const GET_USER_PROPERTIES = "GET_USER_PROPERTIES"
const UPDATE_USER_CONTACT = "UPDATE_USER_CONTACT"
const ADD_TENANT = "ADD_TENANT"
const EDIT_PROPERTY = "EDIT_PROPERTY"

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

export function getUserProperties(id) {
    const userProps = axios.get(`/api/properties`)
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

export function addTenant(id, email, lease) {
    const newTenant = axios.put(`/api/addtenant/${id}/${email}/${lease}`)
        .then(response => {
            return response.data
        })

    return {
        type: ADD_TENANT,
        payload: newTenant
    }
}

// update actions:

export function updateContact(phone, prefcontact) {
   
    const updatedProp = axios.put(`/api/contact/${phone}/${prefcontact}`)
        .then(response => {
            return response.data
        }).catch((err) => console.log(err))

    return {
        type: UPDATE_USER_CONTACT,
        payload: updatedProp
    }
}

export function updateProperty(id, body){
    console.log(body)
    const updatedProp = axios.put(`/api/editprop/${id}`, body)
    .then(response => response.data)
    .catch(err => console.log(err))

    return {
        type: EDIT_PROPERTY,
        payload: updatedProp
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + "_FULFILLED":
            return Object.assign({}, state, { user: action.payload })

        case GET_USER_PROPERTIES + "_FULFILLED":
            return Object.assign({}, state, { userProps: action.payload })

        case SET_USER_TYPE + "_FULFILLED":
            return Object.assign({}, state, { newUser: action.payload })

        case UPDATE_USER_CONTACT + "_FULFILLED":
            return Object.assign({}, state, { contactUpdate: action.payload })

        case ADD_TENANT + "_FULFILLED":
            return Object.assign({}, state, { newTenant: action.payload })

        case ADD_PROPERTY + "_FULFILLED":
            return Object.assign({}, state, { newProp: action.payload })

        case EDIT_PROPERTY + "_FULFILLED":
            return Object.assign({}, state, { editProp: action.payload })


        default:
            return state;
    }
}