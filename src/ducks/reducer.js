import axios from 'axios'

const initialState = {
    user: {},
    newUser: {},
    userProps: [],
    propsUsers: [],
    requests: [],
    usersPropsReqs: [],


    addTenant: {},
    newProp: {},
    prop: {},
    contactUpdate: {},
    editProp: {},

}

const GET_USER_INFO = "GET_USER_INFO"
const SET_USER_TYPE = "SET_USER_TYPE"
const ADD_PROPERTY = "ADD_PROPERTY"
const GET_USER_PROPERTIES = "GET_USER_PROPERTIES"
const UPDATE_USER_CONTACT = "UPDATE_USER_CONTACT"
const ADD_TENANT = "ADD_TENANT"
const EDIT_PROPERTY = "EDIT_PROPERTY"
const DELETE_PROPERTY = "DELETE_PROPERTY"
const GET_USERS_PROPS = "GET_USERS_PROPS"
const ADD_REQUEST = "ADD_REQUEST"
const GET_USERS_PROPS_REQS = "GET_USERS_PROPS_REQS"
const DELETE_REQUEST = "DELETE_REQUEST"

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

export function getUserProperties() {
    const userProps = axios.get('/api/properties')
        .then(response => {
            return response.data
        })

    return {
        type: GET_USER_PROPERTIES,
        payload: userProps
    }
}

export function getUsersProps() {
    const allData = axios.get(`/api/usersprops`)
        .then(response => {
            return response.data
        })

    return {
        type: GET_USERS_PROPS,
        payload: allData
    }
}

export function getUsersPropsReqs() {
    const allData = axios.get(`/api/userspropsreqs`)
    .then (response => {
        return response.data
    })
    
    return {
        type: GET_USERS_PROPS_REQS,
        payload: allData
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
    var user = {
        image,
        address,
        rent
    }
    const newProp = axios.post(`/api/addprop`, user)
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

export function addRequest(prop_id, body) {
    console.log('action', body)
    const newProp = axios.post(`/api/addreq/${prop_id}`, body)
        .then(response => {
            return response.data
        })

    return {
        type: ADD_REQUEST,
        payload: newProp
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

export function updateProperty(id, body) {
    const updatedProp = axios.put(`/api/editprop/${id}`, body)
        .then(response => response.data)
        .catch(err => console.log(err))

    return {
        type: EDIT_PROPERTY,
        payload: updatedProp
    }
}

export function deleteProperty(id) {
    const newProp = axios.delete(`/api/delete/${id}`)
        .then(response => response.data)
        .catch(err => console.log('this property was not deleted'))

    return {
        type: DELETE_PROPERTY,
        payload: newProp
    }
}

export function deleteRequest(id) {
    const newReq = axios.delete(`/api/deletereq/${id}`)
    .then(response => {
        console.log('deleterequest', response.data)
        response.data})
    .catch(err => console.log('action: delete request failed', err))

    return {
        type: DELETE_REQUEST,
        payload: newReq
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
            return Object.assign({}, state, { user: action.payload })

        case ADD_TENANT + "_FULFILLED":
            return Object.assign({}, state, { addTenant: action.payload })

        case ADD_PROPERTY + "_FULFILLED":
            return Object.assign({}, state, { userProps: action.payload })

        case EDIT_PROPERTY + "_FULFILLED":
            return Object.assign({}, state, { userProps: action.payload })

        case DELETE_PROPERTY + "_FULFILLED":
            return Object.assign({}, state, { userProps: action.payload })

        case GET_USERS_PROPS + "_FULFILLED":
            return Object.assign({}, state, { propsUsers: action.payload })

        case ADD_REQUEST + "_FULFILLED":
            return Object.assign({}, state, { usersPropsReqs: action.payload })

        case GET_USERS_PROPS_REQS + "_FULFILLED":
            return Object.assign({}, state, { usersPropsReqs: action.payload })

        case DELETE_REQUEST + "_FULFILLED":
            return Object.assign({}, state, {usersPropsReqs: action.payload })

        default:
            return state;
    }
}