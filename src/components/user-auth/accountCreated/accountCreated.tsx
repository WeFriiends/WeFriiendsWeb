import { useEffect, useState } from 'react'
import ButtonActive from '../../buttonActive/buttonActive'
import Logo from '../../logo/logo'
import './accountCreated.css'
import accountConfirmation from '../../../actions/accountConfirmation'

const AccountCreated = () => {
  const [success, setSuccess] = useState(undefined)

  useEffect(() => {
    function fetchData() {
      let { location } = document
      // It is assumed that the link will look like this http://localhost:3000/account?code=1dfsdfsfd where 1dfsdfsfd is confirmationCode
      const confirmationCode = location.search.substring(6)
      const result = accountConfirmation(confirmationCode)
      setSuccess(result)
    }
    if (success === undefined) {
      fetchData()
    }
  })

  return (
    <>
      {success ? (
        <div className="accountCreated">
          <img className="imgHeader" src="../img/account-header.svg" alt="" />
          <section>
            <Logo />
            <p>
              Glad you’re here!
              <br />
              Hope, you’ll enjoy!
            </p>
            <ButtonActive name="let’s start!" />
          </section>
          <img className="imgFooter" src="../img/account-footer.svg" alt="" />
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  )
}

export default AccountCreated
