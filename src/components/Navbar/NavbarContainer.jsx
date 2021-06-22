import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getIsAuth } from '../../redux/selectors/authSelectors'

const NavbarContainer = (props) => (
  <Navbar {...props} />
)

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps)(NavbarContainer)