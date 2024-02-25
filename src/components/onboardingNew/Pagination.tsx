import { Box, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import classnames from 'classnames'
// import { commonStyles } from './CommonStyles'

const PaginationDot = ({ active, index, onClick }: any) => {
  const { classes } = useStyles()
  // const { classes } = commonStyles()
  const handleClick = (event: any) => {
    onClick(event, index)
  }

  return (
    <Button
      onClick={handleClick}
      className={classnames({
        [classes.progressCircle]: true,
        [classes.active]: active,
        [classes.inActive]: !active,
      })}
    ></Button>
  )
}

const Pagination = ({ dots, index, onChangeIndex }: any) => {
  // const { classes } = commonStyles()
  const { classes } = useStyles()

  const handleClick = (index: number) => {
    onChangeIndex(index)
  }

  const children = []

  for (let i = 1; i < dots; i += 1) {
    children.push(
      <PaginationDot
        key={i}
        index={i}
        active={i === index}
        onClick={() => handleClick(i)}
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

const useStyles = makeStyles()((theme) => ({
  flexContainer: {
    height: '25px',
    display: 'flex',
    flexDirection: 'row',
    margin: '15px auto',
    alignSelf: 'center',
  },
  progressBarContainer: { height: '8px' },
  active: {
    backgroundColor: '#1D878C',
  },
  inActive: {
    backgroundColor: '#F46B5D',
  },
  progressCircle: { marginInline: '8px' },
}))
