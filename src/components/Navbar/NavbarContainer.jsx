import { connect } from 'react-redux'
import Navbar from './Navbar'

const NavbarContainer = (props) => (
  <Navbar {...props} />
)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(NavbarContainer)