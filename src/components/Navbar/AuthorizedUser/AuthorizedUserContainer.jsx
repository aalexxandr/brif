import { connect } from 'react-redux'
import AuthorizedUser from './AuthorizedUser'
import { logout } from '../../../redux/authReducer'
import { getUserName, getUserEmail, getPhotoUrl } from '../../../redux/selectors/authSelectors'

const AuthorizedUserContainer = (props) => (
  <AuthorizedUser {...props} />
)

const mapStateToProps = (state) => ({
  userName: getUserEmail(state),
  userEmail: getUserName(state),
  photoUrl: getPhotoUrl(state)
})

export default connect(mapStateToProps, {logout})(AuthorizedUserContainer)