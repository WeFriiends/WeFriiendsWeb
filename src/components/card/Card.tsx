import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Card = () => {
  return (
    <Box>
      <img src="/img/foto_Elena.jpg" alt="card" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Elena S., 36</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h3">About Me</Typography>
          <Typography>
            I am a talented, ambitious and hardworking individual, with broad
            skills and experience in digital and printed marketing, social media
            and leading projects.
          </Typography>
          <Typography variant="h3">Education and Profession</Typography>
          <Typography>Freelance Journalist Bachelor degree</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
export default Card
