import React from 'react'
import {Box, TextField, Button, Link, Typography} from '@mui/material'

const Registration = () => {
  return (

      <Box className='registerBox' height = '349px' width= '396px'bgcolor='#fff' sx = {{
        ml: '245px',
        mt: '124px'
      }}>
        <TextField sx = {{
          
          input: {
            fontWeight: '540',
            border: 'none', 
            height: '19px',
            width: '336px',
            fontSize: '17px',
            color: '#000000',
          },
          ml: '16px', mt: '16px',
          
          
        }} placeholder = 'Correo electrónico o número de teléfono'>

        </TextField>

        <TextField sx = {{
          
          input: {
            fontWeight: '540',
            border: 'none', 
            height: '19px',
            width: '336px',
            fontSize: '17px',
            color: 'black',
          },
          ml: '16px', mt: '12px',
          
          
        }} placeholder = 'Contraseña' >

        </TextField>

        <Button variant = 'contained' disableElevation sx = {{
          ml: '17px',
          mt: '15px',
          height: '49px',
          width: '365px',
          borderRadius: '5px',
          textTransform: 'none',
          bgcolor: '#1877f2',
          fontSize: '20px'
        }}>
         Iniciar sesión  
        </Button>
        
        <Typography sx = {{mt: '13.5px', ml: '117px'}}>
          <Link href = 'https://es-la.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0' underline = 'hover' sx = {{
            color: '#1877f2',
            fontSize: '14px'
          }} >
            ¿Olvidaste tu contraseña?
          </Link>

        </Typography>
        <Box class="hrs"/>

        <Button variant = 'contained' disableElevation sx = {{
          ml: '103px',
          mt: '8px',
          height: '49px',
          width: '191px',
          borderRadius: '7px',
          textTransform: 'none',
          bgcolor: '#42b72a',
          fontSize: '17px',
          '&:hover':{
            backgroundColor: '#3ca626'
          }
        }} >
         Crear cuenta nueva  
        </Button>

        <Typography sx = {{
          mt: '50px',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          <Link underline='hover' color = 'black'>
            <b>Crea una página </b>
          </Link>
          para una celebridad, una marca o un negocio.
        </Typography>

      </Box>

  )
}

export default Registration