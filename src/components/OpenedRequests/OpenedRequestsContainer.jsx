import {useEffect} from 'react'
import { connect } from 'react-redux'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import OpenedRequests from './OpenedRequests'

const OpenedRequestsContainer = (props) => {
    useEffect( () => {
        props.getRequests()
    }, [])


    const requestsData = []

    props.requests.map(request => {
        if (request.status === 'open') {
            requestsData.push(request)
        }
    })

    return (
        props.loading ? <Loader /> : <OpenedRequests requests={requestsData} />
    )
}
const mapStateToProps = (state) => ({
    requests: state.requests.requestsData,
    loading: state.requests.loading
})
export default connect(mapStateToProps, {getRequests})(OpenedRequestsContainer)


