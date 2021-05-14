import { connect } from 'react-redux'
import ChangeRequestStatus from './ChangeRequestStatus'
import { changeStatusRequest } from '../../../redux/requestsReducer'

const ChangeRequestStatusContainer = (props) => {
    const changeRequest = () => {
        props.changeRequest(props.requestId, props.status)
    }
    return (
        <ChangeRequestStatus changeRequest={changeStatusRequest} />
    )
}

export default connect('', {changeStatusRequest})(ChangeRequestStatusContainer)