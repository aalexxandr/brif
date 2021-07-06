import { usersApi } from '../utils/api'

const SET_ADMINS = 'admins/SET_ADMINS'
const SET_LOADING = 'admins/SET_LOADING'
const DELETE_ADMIN = 'admins/DELETE_ADMIN'

const initialState = {
    adminsList: [],
    loading: true
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
                adminsList: state.adminsList.filter(admin => admin.id !== action.adminId)
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

export const getAdmins = () => async (dispatch) => {
    const res = await usersApi.get()
    res.status === 200 && dispatch(setAdmins(res.data))
    dispatch(setLoading(false))
}

export const addAdmin = (adminEmail) => async (dispatch) => {
    dispatch(setLoading(true))
    await usersApi.post(adminEmail)
    const res = await usersApi.get()
    res.status === 200 && dispatch(setAdmins(res.data))
    dispatch(setLoading(false))
}

export const deleteAdmin = (adminId) => async (dispatch) => {
    dispatch(setLoading(true))
    const res = await usersApi.delete(adminId)
    res.status === 200 && dispatch(deleteAdminState(adminId))
    dispatch(setLoading(false))
}

export const changeAdmin = (adminId, email) => {
    usersApi.put(adminId, { email })
}