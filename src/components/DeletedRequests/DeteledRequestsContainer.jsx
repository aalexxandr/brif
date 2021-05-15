import { useEffect } from 'react'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import { connect } from "react-redux"
import DeletedRequest from './DeletedRequests'

const DeletedRequestContainer = (props) => {
    useEffect( () => {
        props.getRequests()
    }, [])

    return (
        props.loading ? <Loader /> : <DeletedRequest requests={props.requests.filter(request => request.status === 'deleted')} />
    )
}

const mapStateToProps = (state) => ({
    requests: state.requests.requestsData,
    loading: state.requests.loading
})

export default connect(mapStateToProps, {getRequests})(DeletedRequestContainer)