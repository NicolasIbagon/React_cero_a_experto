
import {Link as RouterLink} from 'react-router-dom'
import {Google} from '@mui/icons-material'
import {Grid, Typography,TextField, Button, Link} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSigIn } from '../../store/auth/thunks'
import { useMemo } from 'react'

export const LoginPage = () => {

  const {status} = useSelector(state=> state.auth);

  const dispatch = useDispatch();

  const {email,password, onInputChange} = useForm({
    email:'nicolas@google.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(()=> status === 'checking', [status]);



  const onSubmit = (event) =>{
    event.preventDefault();

    dispatch(checkingAuthentication());
  }

  const onGoogleSigIn = ()=>{
    dispatch(startGoogleSigIn());
  }

  return (
  <AuthLayout _title='Login'> 
    <form onSubmit={onSubmit}>
      <Grid container>
        
        <Grid item xs={12} sx={{mt:2}}>
          <TextField label = "Correo" type="email" placeholder='correo@google.com' fullWidth name="email" value={email} onChange= {onInputChange}/>
        </Grid>

        <Grid item xs={12} sx={{mt:2}}>
          <TextField label = "Contraseña" type="password" placeholder='Contraseña' fullWidth  name="password" value={password} onChange= {onInputChange}/>
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
