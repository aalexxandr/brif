import { Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import React, { useState } from 'react'
import { Formik } from "formik"
import { fields } from '../../utils/formFields'
import { validationSchema } from '../../utils/formFields'
import { addRequest } from '../../redux/requestsReducer'
import {Alert, AlertTitle} from '@material-ui/lab';

const SendRequest = () => {

    const [submitted, setSubmitted] = useState(false)

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
                    {submitted && 
                    <Alert severity="success" style={{width: '100%'}}>
                        <AlertTitle>Успешно</AlertTitle>
                        Ваша заявка принята, совсем скоро с вами свяжется менеджер!
                    </Alert>
                    }
                    
                    <Formik
                        initialValues={initialValues}
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => { 
                            addRequest(values)
                            actions.resetForm({values: initialValues})
                            setSubmitted(true)
                        }
                        }
                    >
                        {
                            ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
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
                                    <Button disabled={!isValid} variant="outlined" color="inherit" style={{ margin: '15px 0' }} type="submit">Отправить</Button>
                                </form>
                            )
                        }
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SendRequest