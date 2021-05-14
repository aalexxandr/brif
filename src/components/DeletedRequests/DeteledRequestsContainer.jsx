import { connect } from "react-redux"
import DeletedRequest from './DeletedRequest'

const DeletedRequestContainer = (props) => {
    return <DeletedRequest />
}

export default connect()(DeletedRequestContainer)