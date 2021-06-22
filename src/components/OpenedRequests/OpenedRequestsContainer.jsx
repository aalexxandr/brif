import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import OpenedRequests from './OpenedRequests'
import { getOpenRequests, getLoading } from '../../redux/selectors/requestsSelectors'

const OpenedRequestsContainer = (props) => {
    useEffect( () => {
        props.getRequests()
    }, [])

    return (
        props.loading ? <Loader /> : <OpenedRequests requests={props.requests} />
    )
}
const mapStateToProps = (state) => ({
    requests: getOpenRequests(state),
    loading: getLoading(state)
})
export default connect(mapStateToProps, {getRequests})(OpenedRequestsContainer)