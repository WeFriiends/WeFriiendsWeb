import { useEffect, useState } from 'react'
import DisplayResult from './DisplayResult'
import accountConfirmation from '../../../actions/accountConfirmation'
import { Box, CircularProgress } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useParams } from 'react-router-dom'

const AccountCreated = () => {
  const { classes } = useStyles()
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { confirmationCode } = useParams()

  useEffect(() => {
    async function fetchData() {
      // It is assumed that the link will look like this http://localhost:3000/registration/glad-screen/2de95be7-9450-4c3a-80c8-e32584c90315 where 2de95be7-9450-4c3a-80c8-e32584c90315 is confirmationCode
      const result = await accountConfirmation(confirmationCode)
      setSuccess(result)
      setIsLoading(false)
    }
    fetchData()
  }, [confirmationCode])

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress className={classes.circularProgress} />
        </Box>
      ) : (
        <DisplayResult state={success} />
      )}
    </>
  )
}

export default AccountCreated

const useStyles = makeStyles()(() => {
  return {
    circularProgress: {
      color: '#FB8F67',
      position: 'absolute',
      top: '50%',
    },
  }
})
