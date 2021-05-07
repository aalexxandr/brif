import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AuthorizedUserContainer from '../AuthorizedUser/AuthorizedUserContainer'
import LoginButtonContainer from '../LoginButton/LoginButtonContainer'

const Navbar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                {
                    props.isAuth ? <AuthorizedUserContainer /> : <LoginButtonContainer />
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar