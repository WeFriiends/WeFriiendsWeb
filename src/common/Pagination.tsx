import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import classnames from 'classnames'

const PaginationDot = ({ active, index, onClick }: any) => {
  const { classes } = useStyles()
  const handleClick = (event: any) => {
    onClick(event, index)
  }

  return (
    <Box
      onClick={handleClick}
      className={classnames({
        [classes.progressCircle]: true,
        [classes.active]: active,
        [classes.inActive]: !active,
      })}
    />
  )
}

const Pagination = ({ dots, activeStep, onChangeIndex }: any) => {
  const { classes } = useStyles()

  const handleClick = (event: any, index: number) => {
    onChangeIndex(index)
  }

  const children = []

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        //should have as key smth else
        key={i}
        index={i}
        active={i === activeStep}
        onClick={handleClick}
      />
    )
  }

  return (
    <Box className={`${classes.flexContainer} ${classes.progressBarContainer}`}>
      {children}
    </Box>
  )
}

export default Pagination

// const useStyles = makeStyles()((theme) => ({
//   flexContainer: { display: 'flex', justifyContent: 'space-between' },
//   progressBarContainer: {},

//   active: {
//     backgroundColor: red[500],
//   },
//   inActive: {
//     backgroundColor: grey[500],
//   },
//   progressCircle: {
//     width: '10px',
//     aspectRatio: 1,
//     borderRadius: '50%',
//   },
// }))

const useStyles = makeStyles()((theme) => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px auto',
    height: '25px',
  },
  progressBarContainer: { height: '8px' },

  active: {
    // backgroundColor: red[500],
    backgroundColor: '#1D878C',
  },
  inActive: {
    // backgroundColor: grey[500],
    backgroundColor: '#F46B5D',
  },
  progressCircle: {
    // width: '10px',
    width: '26px',
    // aspectRatio: 1,
    // borderRadius: '50%',
    marginInline: '8px',
  },
  // TODO: Create styles for dashed stile
  progressDash: {
    width: '26px',
    marginInline: '10px',
  },
  inActiveDash: {
    backgroundColor: '#F46B5D',
  },
  activeDash: {
    backgroundColor: '#1D878C',
  },
}))
