import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import classnames from 'classnames'

type PaginationPropsType = {
  dots: number
  activeStep: number
  onChangeIndex: (step: number) => void
}

type PaginationDotPropsType = {
  active: boolean
  index: number
  onClick: (index: number) => void
}

const PaginationDot = ({ active, index, onClick }: PaginationDotPropsType) => {
  const { classes } = useStyles()
  const handleClick = () => {
    onClick(index)
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

const Pagination = ({
  dots,
  activeStep,
  onChangeIndex,
}: PaginationPropsType) => {
  const { classes } = useStyles()

  const handleClick = (index: number) => {
    onChangeIndex(index)
  }

  const children = []
  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        key={`${i + activeStep}`}
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

const useStyles = makeStyles()(() => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px auto',
    height: '25px',
  },
  progressBarContainer: {
    height: 10,
  },

  active: {
    // backgroundColor: red[500],
    backgroundColor: '#1D878C',
  },
  inActive: {
    // backgroundColor: grey[500],
    backgroundColor: '#F46B5D',
  },
  progressCircle: {
    width: 10,
    borderRadius: 5,
    marginInline: 6,
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
