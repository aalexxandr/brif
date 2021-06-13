import { usersApi } from '../utils/api'

const SET_ADMINS = 'SET_ADMINS'
const SET_LOADING = 'SET_LOADING'
const DELETE_ADMIN = 'DELETE_ADMIN'

const initialState = {
    adminsList: [],
    loading: false
}

export const adminsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMINS: {
            return {
                ...state,
                adminsList: [...action.adminsList]
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.isLoading
            }
        }
        case DELETE_ADMIN: {
            return {
                ...state,
                adminsList: state.adminsList.filter( admin => admin.id !== action.adminId )
            }
        }
        default: {
            return state
        }
    }
}

const setLoading = (isLoading) => ({
    type: SET_LOADING,
    isLoading
})

const setAdmins = (adminsList) => ({
    type: SET_ADMINS,
    adminsList
})


const deleteAdminState = (adminId) => ({
    type: DELETE_ADMIN,
    adminId
})

export const getAdmins = () => (dispatch) => {
    dispatch(setLoading(true))
    usersApi.get().then( (res) => {
        res.status === 200 && dispatch(setAdmins(res.data))
        dispatch(setLoading(false))
    })
}

export const addAdmin = (adminEmail) => (dispatch) => {
    dispatch(setLoading(true))
    usersApi.post(adminEmail).then( (res) => {
        usersApi.get().then( (res) => {
            res.status === 200 && dispatch(setAdmins(res.data))
            dispatch(setLoading(false))
        })
    })
}

export const deleteAdmin = (adminId) => (dispatch) => {
    dispatch(setLoading(true))
    usersApi.delete(adminId).then( (res) => {
        res.status === 200 && dispatch(deleteAdminState(adminId))
        dispatch(setLoading(false))
    })
}

export const changeAdmin = (adminId, email) => {
    usersApi.put(adminId, {email})
}