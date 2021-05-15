import { connect } from 'react-redux'
import ChangeRequestStatus from './ChangeRequestStatus'
import { changeRequestStatus } from '../../../redux/requestsReducer'

const ChangeRequestStatusContainer = (props) => {
    const changeRequest = () => {
        props.changeRequestStatus(props.requestId, props.status)
    }
    return (
        <ChangeRequestStatus changeRequest={changeRequest} status={props.status} />
    )
}

export default connect('', {changeRequestStatus})(ChangeRequestStatusContainer)