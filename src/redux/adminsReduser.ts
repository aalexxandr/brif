import { usersApi } from '../utils/api'

const SET_ADMINS = 'admins/SET_ADMINS'
const SET_LOADING = 'admins/SET_LOADING'
const DELETE_ADMIN = 'admins/DELETE_ADMIN'

export type initialStateType = {
    adminsList: Array<any> | null,
    loading: boolean
}
const initialState: initialStateType= {
    adminsList: [],
    loading: true
}

export const adminsReduser = (state = initialState, action: any): initialStateType => {
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

type setLoadingActionType = {
    type: typeof SET_LOADING,
    isLoading: boolean
}

const setLoading = (isLoading:boolean) : setLoadingActionType => ({
    type: SET_LOADING,
    isLoading
})

type setAdminsActionType = {
    type: typeof SET_ADMINS,
    adminsList: Array<any>
}

const setAdmins = (adminsList: Array<any>):setAdminsActionType => ({
    type: SET_ADMINS,
    adminsList
})

type deleteAdminsActionType = {
    type: typeof DELETE_ADMIN,
    adminId: number
}

const deleteAdminState = (adminId: number):deleteAdminsActionType => ({
    type: DELETE_ADMIN,
    adminId
})

export const getAdmins = () => async (dispatch: any) => {
    const res = await usersApi.get()
    res.status === 200 && dispatch(setAdmins(res.data))
    dispatch(setLoading(false))
}

export const addAdmin = (adminEmail: string) => async (dispatch: any) => {
    dispatch(setLoading(true))
    await usersApi.post(adminEmail)
    const res = await usersApi.get()
    res.status === 200 && dispatch(setAdmins(res.data))
    dispatch(setLoading(false))
}

export const deleteAdmin = (adminId: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const res = await usersApi.delete(adminId)
    res.status === 200 && dispatch(deleteAdminState(adminId))
    dispatch(setLoading(false))
}

export const changeAdmin = (adminId: number, email: string) => {
    usersApi.put(adminId, { email })
}