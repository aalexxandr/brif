import { connect } from 'react-redux'
import ChangeRequestStatus from './ChangeRequestStatus'
import { changeRequest } from '../../../redux/requestsReducer'

const ChangeRequestStatusContainer = (props) => {
    const changeRequest = () => {
        props.changeRequest(props.requestId)
    }
    return (
        <ChangeRequestStatus changeRequest={changeRequest} />
    )
}

export default connect('', {changeRequest})(ChangeRequestStatusContainer)