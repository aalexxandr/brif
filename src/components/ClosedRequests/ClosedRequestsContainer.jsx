import {useEffect} from 'react'
import { connect } from 'react-redux'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import ClosedRequests from './ClosedRequests'
import { getClosedRequests, getLoading } from '../../redux/selectors/requestsSelectors'

const ClosedRequestsContainer = (props) => {
    useEffect( () => {
        props.getRequests()
    }, [])

    return (
        props.loading ? <Loader /> : <ClosedRequests requests={props.requests} />
    )
}
const mapStateToProps = (state) => ({
    requests: getClosedRequests(state),
    loading: getLoading(state)
})

export default connect(mapStateToProps, {getRequests})(ClosedRequestsContainer)


