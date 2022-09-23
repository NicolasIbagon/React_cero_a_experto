
import {Link as RouterLink} from 'react-router-dom'
import {Grid, Typography,TextField, Button, Link} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm';

const formData = {
  email:'nicolasibagon@gmail.com',
  password:'12345',
  displayName:'Fernando Herrera'
}

const formValidations = {
  email: [(value)=> value.includes('@'), 'El email debe de tener un @' ],
  password: [(value)=> value.length >= 6, 'El password debe tener más de 6 caracteres'],
  displayName : [(value)=> value.length >=1, 'El nombre es obligatorio' ]
}

export const RegisterPage = () => {

  const {displayName,email,password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const onSubmit = (event)=>{
    event.preventDefault()
  }


  

  return (
    <AuthLayout _title='Registro'> 
    <form onSubmit={onSubmit}>
      <Grid container>

        <Grid item xs={12} sx={{mt:2}}>
          <TextField label = "Nombre completo" type="text" placeholder='Nombres y Apellidos' fullWidth name="displayName" value= {displayName} onChange = {onInputChange}/>
        </Grid>

        <Grid item xs={12} sx={{mt:2}}>
          <TextField label = "Correo" type="email" placeholder='correo@google.com' fullWidth name="email" value= {email} onChange = {onInputChange}/>
        </Grid>

        <Grid item xs={12} sx={{mt:2}}>
          <TextField label = "Contraseña" type="password" placeholder='Contraseña' fullWidth name="password" value= {password} onChange = {onInputChange}/>
        </Grid>


        <Grid container spacing={2} sx={{mb:2, mt:1}}>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Crear Cuenta
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction='row' justifyContent='end'>
        <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
        <Link component={RouterLink} color='inherit' to="/auth/login">Ingresar</Link>   
      </Grid>
    </form>
  </AuthLayout>
  )
}
