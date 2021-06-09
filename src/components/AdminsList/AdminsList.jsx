import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core'

const AdminsList = () => (
    <Container>
    <Grid container
        style={{ height: window.innerHeight - 100 }}
        alignItems="center"
        justify="center"
    >
        <Grid
            container
            alignItems="center"
            direction="column"
        >
             <Typography variant="h6" style={{ margin: '20px', fontWeight: '400' }}>
                Список администраторов
            </Typography>
            123
        </Grid>
    </Grid>
</Container>
)

export default AdminsList