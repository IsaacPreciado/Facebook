import React from 'react'
import {Typography} from '@mui/material'
import Box from '@mui/material/Box'
import imgFacebook from '../imgs/facebook.png'
import imgProfile from '../imgs/profile.jpg'
import cerrar from '../imgs/cerrar.jpg'
import frank from '../imgs/frank.jpg'
import Add from '../imgs/Add.PNG'

const Info = () => {

  return (
    <Box sx={{
      ml: {lg: '225px'},
      mt: {lg: '68px'}}}
      display ='inline-block'>
      <Box
          component='img'
          sx={{
            height: {lg: '73px', xs: '100px'},
            width: {lg: '200px', xs : '200px'},
            ml: {lg: '-20px'},
            mt: {lg: '3px'},
            
          }}
          alt="facebook"
          src={imgFacebook}
        />

        <Typography fontSize= '28px' sx = {{mt: {lg: '-10px'}}}>
          Inicios de sesión recientes
        </Typography>

        <Typography color= 'gray' sx = {{mt: {lg: '-5px'}}} fontSize = '15px'>
        Haz clic en tu foto o agrega una cuenta.
        </Typography>

        <Box sx = {{
          width: {lg: '160px'},
          height: {lg: '208px'},
          mt: {lg: '25px'},
          bgcolor: '#fff'
          }} className = 'box'>

          <Box
            component = 'img'
            src = {cerrar}
            alt = 'cerrar'
            sx = {{
              width: {lg: '14px'},
              height: {lg: '14px'},
              position: 'absolute',
              borderRadius: '100%',
              ml: '6px', mt : '6px',
              transition:'.1s'
            }}
            className = 'cerrar'
          />
        

          <Box
            component =  'img'
            sx = {{
              width: {lg: '160px'},
              
            }}
            className = 'profileImg'
            src = {imgProfile}
            alt = 'imgProfile'
          />

          <Typography sx = {{
            ml: {lg: '16px'},
            mt: {lg: '7px'},
            color: 'rgb(75, 75, 75)',
            position:'absolute',
            fontSize: '18px',
          }} >
            Isaac Humberto
          </Typography>

        </Box>

        
        <Box sx = {{
          width: {lg: '160px'},
          height: {lg: '208px'},
          mt: {lg: '25px'},
          ml: '19px',
          bgcolor: '#fff'
          }} className = 'box'>

          <Box
            component = 'img'
            src = {cerrar}
            alt = 'cerrar'
            sx = {{
              width: {lg: '14px'},
              height: {lg: '14px'},
              position: 'absolute',
              borderRadius: '100%',
              ml: '6px', mt : '6px',
              transition:'.1s'
            }}
            className = 'cerrar'
          />
        

          <Box
            component =  'img'
            sx = {{
              width: {lg: '160px'},
              
            }}
            className = 'profileImg'
            src = {frank}
            alt = 'frank'
          />

          <Typography sx = {{
            ml: {lg: '4px'},
            mt: {lg: '7px'},
            color: 'rgb(75, 75, 75)',
            position:'absolute',
            fontSize: '18px',
          }} >
            Francisco Mendivil
          </Typography>

        </Box>

        <Box sx = {{
          width: {lg: '160px'},
          height: {lg: '208px'},
          mt: '25px', ml: '19px',
          bgcolor: '#fff'
          }} className = 'box' position= 'absolute'>

          <Box
            component =  'img'
            sx = {{
              width: {lg: '160px'},
              
            }}
            className = 'profileImg'
            src = {Add}
            alt = 'imgProfile'
          />

          <Typography sx = {{
            ml: {lg: '16px'},
            mt: {lg: '4px'},
            color: '#1877f2',
            position:'absolute',
            fontSize: '18px',
          }} >
            Agregar cuenta
          </Typography>

        </Box>

    </Box>
  )
}

export default Info