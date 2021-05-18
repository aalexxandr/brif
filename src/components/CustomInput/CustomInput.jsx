import { TextField } from '@material-ui/core'
import { useField } from 'formik'

const CustomInput = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <TextField
          multiline
          label="Название компании"
          variant="outlined"
          value={companyName}
          fullWidth
          style={{ marginTop: '10px' }}
          className='inputRequired'
          {...field}
          {...props}
      />
      {meta.touched && meta.error ? (
        <div className={errors}>
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}