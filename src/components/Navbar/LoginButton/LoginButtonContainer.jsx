import { authorization } from '../../../redux/authReducer'
import { connect } from 'react-redux'
import LoginButton from './LoginButton'

const LoginButtonContainer = (props) => (
    <LoginButton {...props} />
)

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, {authorization})(LoginButtonContainer)