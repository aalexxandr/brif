import { connect } from 'react-redux'
import AuthorizedUser from './AuthorizedUser'
import { logout } from '../../redux/authReducer'

const AuthorizedUserContainer = (props) => (
  <AuthorizedUser {...props} />
)

const mapStateToProps = (state) => ({
  userName: state.auth.userName,
  userEmail: state.auth.userEmail,
  photoUrl: state.auth.photoUrl
})

export default connect(mapStateToProps, {logout})(AuthorizedUserContainer)