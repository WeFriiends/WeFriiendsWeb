
import Logo from "../../logo/logo"
import { Box, Typography, Grid, Button, Link } from "@mui/material"

const SignIn = () => {

    return (
        <Box
            mr={2.5} 
            ml={2.5} 
            align ='center'>
            <Logo />
            <Typography 
                variant='h1' 
                fontSize={32} 
                fontWeight='600' 
                lineHeight='40px' 
                pt={10} 
                color='#F46B5D' >
                Sign In?
            </Typography>
            <Grid 
                container 
                spacing={2.5}
                marginTop={5.875}> 
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
                    <Link href='/mailSignIn' underline='none'>
                        <Button 
                            fullWidth 
                            variant="contained" 
                            sx={{textTransform:'lowercase', backgroundColor:'#FFF1EC', color:'#444444', height: '56px', fontSize:'18px'}} >
                            e-mail
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <section className="signUp">
                <p>Don't have an account?</p>
                <a href="/"> Sign Up</a>
            </section>
        </Box>
    )
}

export default SignIn