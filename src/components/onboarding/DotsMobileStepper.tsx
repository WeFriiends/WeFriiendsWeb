import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { makeStyles } from 'tss-react/mui'

interface DotsMobileStepperProps {
  basePath: string
  pageCount: number
  page: number
}

const DotsMobileStepper: React.FC<DotsMobileStepperProps> = ({
  basePath,
  pageCount,
  page: initialPage,
}) => {
  const [page, setPage] = React.useState<number>(initialPage)

  const { classes } = useStyles()
  const location = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(location.search)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    query.set('page', value.toString())
    navigate(`${basePath}?${query.toString()}`)
    setPage(value)
  }

  return (
    <Pagination
      page={page}
      count={pageCount}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          // className={item.type === 'page' ? classes.page : classes.oddSpan}
          component={Link}
          to={`${basePath}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
          className={classes.dots}
          onClick={() => {
            if (item.page) {
              query.set('page', item.page.toString())
              navigate(`${basePath}?${query.toString()}`)
              setPage(item.page)
            }
          }}
        >
          {item.type === 'page' ? '•' : null}
          {/* {item.type === 'page' ? (
            <span className={classes.dots}>•</span>
          ) : (
            <span
            className={classes.oddSpan}
            >
              •
            </span>
          )} */}
        </PaginationItem>
      )}
    />
  )
}

export default DotsMobileStepper

const useStyles = makeStyles()(() => {
  return {
    dots: {
      '& .MuiPaginationItem-page': {
        display: 'none',
      },
      '& .Mui-selected': {
        display: 'inline',
      },
    },
  }
})
//     // page: {
//     //   // display: 'none',
//     // },
//     dots: {
//       display: 'inline',
//     },
//     // oddSpan: {
//     //   display: 'inline-block',
//     // },
//   }
// })
