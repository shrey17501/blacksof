import { Grid, Typography, Box, Button, Link  } from "@mui/material";
import { NavLink } from 'react-router-dom';
import smart_lights_logo from '../../images/smart lights_logo.png';
import Hero_section from '../../images/Hero_section.png';
import street_light_controler from '../../images/street_light_controler.png';
import gateway from '../../images/gateway_png.png';
import cloud_based from '../../images/cloud_based management.png';
import users from '../../images/users_png.png';
import evaluation from '../../images/evaluation_png.png';
import smart_lights from '../../images/smart_lights.png';
import icon_png from '../../images/icon_png.png';
import footer from '../../images/Footer.png';
import { styled } from '@mui/system';

const IconBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 60,
  height: 60,
  backgroundColor: '#f0f4f7',
  borderRadius: 8,
  marginBottom: 16,
});

const data = [
  {
    title: 'Saves on power consumption & related costs',
  },
  {
    title: 'Lowers downtimes',
  },
  {
    title: 'Detects power thefts.',
  },
  {
    title: 'Ensures smart monitoring and control of the street light infrastructure.',
  },
  {
    title: 'Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.',
  },
  {
    title: 'Ensures security in the neighborhood',
  },
];

const Home = () => {
  return <>
 
  <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}
      </style>
      <Grid container sx={{ height: '90vh', width: '100vw' }}>
        <Grid item xs={12} sx={{
          backgroundImage: `url(${Hero_section})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          
        }}>
          <Box
            sx={{
              height: '50vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '16px', md: '24px' }
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                Smart Lighting Solutions
              </Typography>

              <Typography variant="h4" sx={{ color: 'white', marginTop: '24px', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                Bringing A New Perspective To Street Lights<br />And The Cities Of Tomorrow.
              </Typography>

              <Button component={NavLink} to='/login' sx={{ color: 'white', backgroundColor: '#0000FF', textTransform: 'none', marginTop: '24px', padding: { xs: '8px 16px', md: '12px 24px' } }}>
                Login
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ height: 'auto', width: '100vw' }}>
        <Grid item xs={12} sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
        }}>

          <Box sx={{ padding: '40px', backgroundColor: '#f5f7fa', height: 'auto' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
              How does a smart street light ecosystem work?
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center" >
              <Grid item xs={12} sm={6} md={3} textAlign="center" >
                <img src={street_light_controler} alt="Street Light Controller" style={{ maxWidth: '100px' }} />
                <Typography variant="body1" sx={{ marginTop: '16px' }}>
                  <strong>Street Light Controller</strong><br />
                  Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center" >
                <img src={gateway} alt="Gateway" style={{ maxWidth: '100px' }} />
                <Typography variant="body1" sx={{ marginTop: '16px' }}>
                  <strong>Gateway</strong><br />
                  Employed for interfacing between a Controller and the Lighting Management Software.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign="center" >
                <img src={cloud_based} alt="Cloud-based Management System" style={{ maxWidth: '100px' }} />
                <Typography variant="body1" sx={{ marginTop: '16px' }}>
                  <strong>Cloud-based Management System</strong><br />
                  Collects information from multiple gateways.
                </Typography>
              </Grid>
              <Grid container item xs={12} justifyContent="center" spacing={4} >
                <Grid item xs={12} sm={6} md={3} textAlign="center">
                  <img src={users} alt="Users" style={{ maxWidth: '100px' }} />
                  <Typography variant="body1" sx={{ marginTop: '16px' }}>
                    <strong>Users</strong><br />
                    Data from the cloud is used to monitor and control street lights by the System Managers.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} textAlign="center" >
                  <img src={evaluation} alt="Evaluation" style={{ maxWidth: '100px' }} />
                  <Typography variant="body1" sx={{ marginTop: '16px' }}>
                    <strong>Evaluation</strong><br />
                    Gathered insights are used to evaluate the performance of the lighting systems.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>

        </Grid>
      </Grid>


      

      <Grid container sx={{ height: 'auto', width: '100vw' }}>
        <Grid item xs={12} sx={{
          backgroundColor: '#ddffff',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}>

          <Box sx={{ padding: { xs: '20px', md: '40px' } }}>
            <Typography variant="h5" sx={{ color: 'primary.main', marginLeft: { xs: '10%', md: '20%' }, marginTop: '5%' }}>
              Products
            </Typography>

            <Typography variant="h4" sx={{ marginLeft: { xs: '10%', md: '20%' }, fontWeight: 'bold', marginTop: '2%' }}>
              Cutting-edge hardware,
              <Typography component="span" variant="h4" sx={{ fontWeight: 'normal', justifyContent: 'center' }}>
                {' '}offerings <br />helping cities optimize resources and <br /> achieve smart development goals
              </Typography>
            </Typography>

           
            <Grid container spacing={2} sx={{ marginTop: '3%', marginLeft: '19%', justifyContent: { xs: 'flex-start', md: 'flext-start' } }}>
              <Grid item style={{ marginLeft: { xs: '10%', md: '12%' } }}>
                <Button variant="contained" color="primary">
                  Centralized Control & Monitoring System
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  NEMA-Mounted VOLC 1160
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Retrofit Street Light Controller VOLC 2160
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Retrofit Street Light Controller VOLC 2180
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Retrofit Street Light Controller VOLC 4180
                </Button>
              </Grid>
            </Grid>

            
            <Grid container sx={{ marginLeft: { xs: '10%', md: '20%' }, marginTop: '2%' }}>
              <Grid item xs={12} md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: 'auto',
                  
                }}
              >
                <img
                  src={smart_lights}
                  alt="Centralized Control & Monitoring System"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', marginLeft: { xs: '0%', md: '0%' }, marginTop: { xs: '10px', md: '0' } }}>
                <Typography variant="overline" sx={{ marginBottom: '8px', marginLeft: '5%' }}>
                  Products 1/5
                </Typography>
                <Typography variant="h4" sx={{ marginBottom: '16px', fontWeight: 'bold', marginLeft: '5%' }}>
                  Centralized Control & Monitoring System
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '16px', marginLeft: '5%' }}>
                  Designed indigenously for street lighting projects, <br /> the CCMS offers a complete feeder panel for a
                  <br />group of 30-50 street lights.
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex', 
                    alignItems: 'center' 
                    , marginLeft: '5%'
                  }}
                >
                  <Link href="#" sx={{ marginRight: '8px', textDecoration: 'none' }}>
                    Know More
                  </Link>
                  <img src={icon_png} alt="icon" style={{ height: '16px', width: '16px' }} />
                </Box>
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
  <Grid item xs={12} sx={{
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  }}>
      <Box p={4} >
      <Typography variant="h4" align="center" gutterBottom style={{marginTop: '2%'}}>
        The platform assists city managers <br/> on multiple fronts
      </Typography>
      <Grid container spacing={4} justifyContent="center" style={{marginTop: '2%'}}>
        {data.map((item, index) => (
          <Grid item xs={4} sm={2} md={6} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconBox>
               
                <img src={users} alt="icon" style={{ height: '75px' }}/>
              </IconBox>
              <Typography align="center">{item.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    </Grid>
    </Grid>



      <Grid container sx={{ height: '60vh', width: '100vw', flexDirection: 'column', justifyContent: 'space-between' }}>
  <Grid item xs={12} sx={{
    backgroundImage: `url(${footer})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  }}>
    <Box
      sx={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 40px',
        color: 'white',
      }}
    >
      <Grid container alignItems="center" sx={{ position: 'relative' }}>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={smart_lights_logo} alt="Smart Lights" style={{ height: '25px' }} />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'space-around', md: 'flex-start' },
            gap: { md: '90px' },
            position: 'relative',
            paddingLeft: { md: '50px' } 
          }}>
            <Typography variant="body1">Product</Typography>
            <Typography variant="body1">Software Services</Typography>
            <Typography variant="body1">Follow Us</Typography>
          </Box>
        </Grid>

       
        <Box sx={{
          position: 'absolute',
          bottom: '-550%', 
          left: '42%',      
          width: '51%',
          transform: 'translateX(-50%)',
          borderBottom: '1px solid white',
          zIndex: 1
        }} />
      </Grid>
    </Box>

   
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '20px',
      marginLeft: '18%',
      color: 'white',
      paddingTop: '0%' 
    }}>
      <Typography variant="body2">Privacy Policy</Typography>
      <Typography variant="body2">Terms & Conditions</Typography>
      <Typography variant="body2">Cookie Policy</Typography>
    </Box>
  </Grid>

      </Grid>
    </>
};

export default Home;
