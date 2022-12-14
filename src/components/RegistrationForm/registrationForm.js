import Logo from '../logo/logo'
import './registrationForm.css'

const RegistrationForm = () => {


    return (
        <div>
            <div className='registrationForm'>
                <Logo />
                <section className="header">
                    <h1> Enter Email</h1>
                </section>
                <form>
                    <label for="email">Login</label>
                    <input type="email" id="email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password"></input>
                    <label for="confirmPassword">One more time</label>
                    <input type="password" id="confrimPassword"></input>
                    <button className='btn'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm