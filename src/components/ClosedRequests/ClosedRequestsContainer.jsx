import {useEffect} from 'react'
import { connect } from 'react-redux'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import ClosedRequests from './ClosedRequests'

const ClosedRequestsContainer = (props) => {
    useEffect( () => {
        props.getRequests()
    }, [])


    const requestsData = []

    props.requests.map(request => {
        if (request.status === 'close') {
            requestsData.push(request)
        }
    })

    return (
        props.loading ? <Loader /> : <ClosedRequests requests={requestsData} />
    )
}
const mapStateToProps = (state) => ({
    requests: state.requests.requestsData,
    loading: state.requests.loading
})
export default connect(mapStateToProps, {getRequests})(ClosedRequestsContainer)


