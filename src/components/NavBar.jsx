// import {  IconButton} from '@mui/material'
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material'
import logo from '../assets/logo_3.png'
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

const NavBar = () => {
  return (
  // <AppBar position='static'>
    <AppBar color='secondary'>
      <Toolbar>
        <img src={logo} alt='logo' style={{ height: 35, marginRight: 10, transform: 'rotate(0deg)' }} />
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Erick Chávez
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>About me</Button>
          <Button color='inherit'>Projects</Button>
          <Button color='inherit'>Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
