import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import smart_lights_logo from '../images/smart lights_logo.png';

const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          
          <img src={smart_lights_logo} alt="Smart Lights" style={{ height: '25px', marginRight: '25%', marginLeft:'20%'}} />

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'blue' : '' } }} sx={{ color: 'white', textTransform: 'none', marginRight: '2%' }}>Home</Button>

          <Button component={NavLink} to='/products' style={({ isActive }) => { return { backgroundColor: isActive ? 'blue' : '' } }} sx={{ color: 'white', textTransform: 'none', marginRight: '2%' }}>Products</Button>
          
          <Button component={NavLink} to='/software_services' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none', marginRight: '2%' }}>Software Services</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
