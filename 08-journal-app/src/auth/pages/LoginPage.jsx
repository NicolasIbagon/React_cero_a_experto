
import {Link as RouterLink} from 'react-router-dom'
import {Google} from '@mui/icons-material'
import {Grid, Typography,TextField, Button, Link, Alert} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSigIn, startLoginWIthEmailPassowrd } from '../../store/auth/thunks'
import { useMemo } from 'react'

const formData ={
  email:'',
  password: ''
}

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state=> state.auth);

  const dispatch = useDispatch();

  const {email,password, onInputChange} = useForm(formData);

  const isAuthenticating = useMemo(()=> status === 'checking', [status]);



  const onSubmit = (event) =>{
    event.preventDefault();

    dispatch(startLoginWIthEmailPassowrd({email, password}));
  }

  const onGoogleSigIn = ()=>{
    dispatch(startGoogleSigIn());
  }

  return (
  <AuthLayout _title='Login'> 
    <form aria-label='submit-form' onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster" >
      <Grid container>
        
        <Grid item xs={12} sx={{mt:2}}>
          <TextField aria-label='correo' label = "Correo" type="email" placeholder='correo@google.com' fullWidth name="email" value={email} onChange= {onInputChange}/>
        </Grid>

        <Grid item xs={12} sx={{mt:2}}>
          <TextField label = "Contraseña" type="password" placeholder='Contraseña' fullWidth inputProps={{'data-testid': 'password'}} name="password" value={password} onChange= {onInputChange}/>
        </Grid>


        <Grid container display= {!!errorMessage ? '' : 'none'} sx= {{mt:1}}>
          <Grid item xs= {12} >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
        </Grid>
        
        <Grid container spacing={2} sx={{mb:2, mt:1}}>
          <Grid item xs={12} sm={6}>
            <Button type="submit" 
                    variant='contained' 
                    fullWidth
                    disabled = {isAuthenticating}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={onGoogleSigIn} 
                    variant='contained' 
                    fullWidth
                    aria-label = "google-btn"
                    disabled = {isAuthenticating}>
              <Google/> <Typography sx={{ml:1}}> Google</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction='row' justifyContent='end'>
        <Link component={RouterLink} color='inherit' to="/auth/register">Crear una Cuenta</Link>   
      </Grid>
    </form>
  </AuthLayout>
  )
}
