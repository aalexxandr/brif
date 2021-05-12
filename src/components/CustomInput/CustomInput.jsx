import { TextField } from '@material-ui/core'
import { useField } from 'formik'

const CustomInput = () => {
  useField
  <div>
    <TextField
        multiline
        label="Название компании"
        variant="outlined"
        value={companyName}
        fullWidth
        style={{ marginTop: '10px' }}
        onChange={e => setCompanyName(e.target.value)}
        className='inputRequired'
        required
    />
  </div>
}