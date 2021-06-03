import { connect } from "react-redux"
import SendRequest from './SendRequest'

const SendRequestContainer = (props) => {
    return <SendRequest />
}

export default connect()(SendRequestContainer)