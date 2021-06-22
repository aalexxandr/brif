import React, { useEffect } from 'react'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import { connect } from "react-redux"
import DeletedRequest from './DeletedRequests'
import { getDeletedRequests, getLoading } from '../../redux/selectors/requestsSelectors'

const DeletedRequestContainer = (props) => {

    useEffect( () => {
        props.getRequests()
    }, [])

    return (
        props.loading ? <Loader /> : <DeletedRequest requests={props.requests} />
    )
}

const mapStateToProps = (state) => ({
    requests: getDeletedRequests(state),
    loading: getLoading(state)
})

export default React.memo(connect(mapStateToProps, {getRequests})(DeletedRequestContainer))