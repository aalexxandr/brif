import { Button, Grid } from '@material-ui/core'

const LoginButton = (props) => (
    <Grid container justify="flex-end">
        <Button variant="outlined" color="inherit" onClick={props.authorization} disabled={props.isLoading}>Войти</Button>
    </Grid>
)

export default LoginButton