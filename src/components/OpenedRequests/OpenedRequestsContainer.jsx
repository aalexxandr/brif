import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRequests } from '../../redux/requestsReducer'
import Loader from '../Loader/Loader'
import OpenedRequests from './OpenedRequests'

const OpenedRequestsContainer = (props) => {
    useEffect( () => {
        props.getRequests('open')
    }, [])

    let test = []

    props.requests.map( request => {
        if (request.status === 'open') {
            test.push(request)
        }
    })

    return (
        props.loading ? <Loader /> : <OpenedRequests requests={test} />
    )
}
const mapStateToProps = (state) => ({
    requests: state.requests.requestsData,
    loading: state.requests.loading
})
export default connect(mapStateToProps, {getRequests})(OpenedRequestsContainer)


