import { connect } from 'react-redux'
import ChangeRequestStatus from './ChangeRequestStatus'
import { changeRequestStatus } from '../../../redux/requestsReducer'

const ChangeRequestStatusContainer = (props) => {
    const changeRequest = () => {
        props.changeRequestStatus(props.requestId, props.changeStatus)
    }
    return (
        <ChangeRequestStatus changeRequest={changeRequest} status={props.changeStatus} />
    )
}

export default connect('', {changeRequestStatus})(ChangeRequestStatusContainer)