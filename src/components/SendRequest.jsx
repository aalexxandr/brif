import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Formik } from "formik"
import { fields } from '../../utils/formFields'
import { validationSchema } from '../../utils/formFields'

const SendRequest = (props) => {

    const initialValues = {}
    fields.map(field => initialValues[field.code] = '')

    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems="center"
                justify="center"
            >
                <Grid
                    container
                    alignItems="center"
                    direction="column"
                >

                    <Typography variant="h6" style={{ margin: '20px', fontWeight: '400' }}>
                        Заявка
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validateOnBlur
                        onSubmit={(values) => { props. }}
                        validationSchema={validationSchema}
                    >
                        {
                            ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                <div>
                                    {
                                        fields.map(field => (
                                            <TextField
                                                style = {{ marginTop: '10px' }}
                                                multiline
                                                onBlur = {handleBlur}
                                                onChange = {handleChange}
                                                name = {field.code}
                                                label = {field.name}
                                                variant = "outlined"
                                                value = {values[field.code]}
                                                required = {field.required}
                                                error = {touched[field.code] && errors[field.code] ? true : false}
                                                helperText={touched[field.code] && errors[field.code]}
                                                key= {field.code}
                                                fullWidth
                                            />
                                        ))
                                    }
                                    <Button disabled={!isValid} variant="outlined" color="inherit" onClick={handleSubmit} style={{ margin: '15px 0' }}>Отправить</Button>
                                </div>
                            )
                        }
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SendRequest