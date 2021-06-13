import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core'
import AdminsListItem from './AdminsListItem'
import TextField from '@material-ui/core/TextField';
import { Formik } from "formik"
import * as Yup from 'yup'

const AdminsList = (props) => {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Неправильный Email')
        .max(100, 'Максимум 100 символов')
        .required('Поле является обязательным')
    })

    return (
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
                    {
                        props.adminsList.map( admin => <AdminsListItem email={admin.email} id={admin.id} key={admin.id} deleteAdmin={props.deleteAdmin}/>)
                    }
                    <Formik 
                        initialValues={{email: ''}}
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            props.addAdmin(values)
                            actions.resetForm({values: {email: ''}})
                        }}
                    >
                            {
                                ({values, handleChange, handleBlur, errors, touched, isValid, handleSubmit}) => (
                                    <Grid container justify="center" style={{marginTop: "20px"}}>
                                        <TextField 
                                            name = "email"
                                            variant = "outlined"
                                            label = "Email"
                                            value = {values.email}
                                            onBlur = {handleBlur}
                                            onChange = {handleChange}
                                            error = {touched.email && errors.email ? true : false}
                                            helperText = {touched.email && errors.email}
                                            />
                                        <Button variant="outlined" color="primary" style={{marginLeft: "10px", height: "56px"}} onClick={handleSubmit} disabled={!isValid}>
                                            Добавить
                                        </Button>
                                    </Grid>
                                )
                            }
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AdminsList