import Avatar from '@material-ui/core/Avatar';
import { Box, Button, Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Menu from '../Menu'

const AuthorizedUser = (props) => (
    <Grid container justify="space-between">
        <Box display="flex" alignItems="center" fontFamily="Roboto" fontWeight="500">
            <Menu />
            <Typography>
                {props.userName}
            </Typography>
        </Box>
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <Avatar alt="Remy Sharp" src={props.photoUrl} />
            </IconButton>
            <Button variant="outlined" color="inherit" onClick={ () => props.logout() }>Выйти</Button>
        </div>
    </Grid>
)

export default AuthorizedUser


