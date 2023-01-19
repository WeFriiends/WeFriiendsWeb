import Logo from "../logo/logo"
import './accountCreated.css'


const AccountCreated = () => {
    return (
        <div className="accountCreated">
            <img className="imgHeader" src="/img/account-header.svg" alt="" />
            <section>
                <Logo />
                <p>Glad you’re here!<br />Hope, you’ll enjoy!</p>
                <button className='btn-create'>let’s start!</button>
            </section>
            <img className="imgFooter" src="/img/account-footer.svg" alt="" />
        </div>
    )
}

export default AccountCreated