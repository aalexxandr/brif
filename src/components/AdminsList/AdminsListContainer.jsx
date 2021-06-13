import { connect } from 'react-redux'
import AdminsList from './AdminsList'
import { getAdmins, addAdmin, deleteAdmin } from '../../redux/adminsReduser'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'

const AdminsListContainer = (props) => {
    useEffect( () => {
        props.getAdmins()
    }, [])

    return props.loading ? <Loader/> : <AdminsList deleteAdmin={props.deleteAdmin} adminsList={props.adminsList} addAdmin={props.addAdmin}/>
}

const mapStateToProps = (state) => ({
    loading: state.admins.loading,
    adminsList: state.admins.adminsList
})
export default connect(mapStateToProps, {getAdmins, addAdmin, deleteAdmin})(AdminsListContainer)