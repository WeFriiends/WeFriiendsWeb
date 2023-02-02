import axios from "axios"
import { useState } from "react"
import ButtonActive from "../buttonActive/buttonActive"
import Logo from "../logo/logo"
import './accountCreated.css'


const AccountCreated = () => {
    const [success, setSuccess] = useState(false)
    let location = document.location
    // It is assumed that the link will look like this http://localhost:3000/account?code=1dfsdfsfd where 1dfsdfsfd is confirmationCode
    let confirmationCode = location.search.substring(6)
    console.log(confirmationCode)


    axios.get(`http://localhost:3001/api/auth/confirm/${confirmationCode}`, confirmationCode)
        .then(result => {
            console.log(result.status)
            if (result.status === 200) { setSuccess(true) }
        })
        .catch(err => console.log(err))


    console.log("success:", success)

    return (
        <>
            {success ? (
                <div className="accountCreated">
                    <img className="imgHeader" src="/img/account-header.svg" alt="" />
                    <section>
                        <Logo />
                        <p>Glad you’re here!<br />Hope, you’ll enjoy!</p>
                        <ButtonActive name='let’s start!' />
                    </section>
                    <img className="imgFooter" src="/img/account-footer.svg" alt="" />
                </div>
            ) : (
                <div>Error</div>
            )
            }
        </>
    )
}

export default AccountCreated