
import Logo from '../../logo/logo';
import { Button, Grid, Typography, Box, Link} from '@mui/material';

const CreateAccount = () => {
    return (
        <Box 
            mr={2.5} 
            ml={2.5} 
            align ='center' >            
            <Logo />            
            <Typography 
                variant='h1' 
                fontSize={32} 
                fontWeight='600' 
                lineHeight='40px' 
                pt={10} 
                color='#F46B5D' >
                New here?
            </Typography>
            <Typography 
                variant='body1' 
                fontSize={26} lineHeight='40px' 
                pb={4.75} 
                color ='#444444'>
                Create an account
            </Typography>

            <Grid 
                container 
                spacing={2.5}> 
                <Grid 
                    item xs={12}>
                    <Button 
                        fullWidth 
                        variant="contained"  
                        sx={{textTransform:'capitalize', backgroundColor:'#FFF1EC', color:'#444444', height: '56px', fontSize:'18px'}} 
                        startIcon={<img alt='fb' src={'/img/fb.svg'} sx={{ width: 24, height: 24, pr:10}}/>} >
                        Facebook
                    </Button>
                </Grid>
                <Grid 
                    item xs={12}>
                    <Button  
                        fullWidth 
                        variant="contained" 
                        sx={{textTransform:'capitalize', backgroundColor:'#FFF1EC', color:'#444444', height: '56px', fontSize:'18px'}} 
                        startIcon={<img alt='google' src={'/img/google.svg'} sx={{ width: 24, height: 24, mr:'16px' }}/>} >
                        Google
                    </Button>
                </Grid>
                <Grid 
                    item xs={12}>
                    <Link href='/registration' underline='none'>
                        <Button 
                            fullWidth 
                            variant="contained" 
                            sx={{textTransform:'lowercase', backgroundColor:'#FFF1EC', color:'#444444', height: '56px', fontSize:'18px'}} >
                            e-mail
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Typography 
                variant='body2'
                pt={1.75}
                align='left'>
                By creating an account, I agree with &nbsp;
                <Link 
                    underline='none' 
                    color='#1D878C'>
                    The Terms of Service &nbsp;
                </Link> 
                    and &nbsp;
                    <Link 
                        underline='none' 
                        color='#1D878C'> 
                    Privacy Policy
                    </Link>
            </Typography>
            <Typography 
                variant='body1' 
                fontSize={22}
                color='#3B4054'>
                Already have an account?
            </Typography>
            <Link 
                href= '/signIn'
                underline='none' 
                fontSize={22} 
                color='#1D878C'>
                Sign In
            </Link>
        </Box>
    )
}

export default CreateAccount;