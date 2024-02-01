import { useEffect, useState } from 'react'
import DisplayResult from './DisplayResult'
import accountConfirmation from '../../../actions/accountConfirmation'
import { useParams } from 'react-router-dom'
import Loader from 'common/Loader'

const AccountCreated = () => {
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

  return <>{isLoading ? <Loader /> : <DisplayResult state={success} />}</>
}

export default AccountCreated
