import { Container, Box } from '@mui/material'
import NavBar from 'components/navBar/NavBar'

interface PageWrapperProps {
  children: React.ReactNode // Define the type of children prop
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      <Box>
        <NavBar />
        {children}
      </Box>
    </Container>
  )
}

export default PageWrapper
