import { authorization } from '../../../redux/authReducer'
import { connect } from 'react-redux'
import LoginButton from './LoginButton'
import { getIsLoading } from '../../../redux/selectors/authSelectors'

const LoginButtonContainer = (props) => (
    <LoginButton {...props} />
)

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state)
})

export default connect(mapStateToProps, {authorization})(LoginButtonContainer)