import './createAccount.css'
import Logo from '../../logo/logo';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    return (
        <div className='createAccount'>
            <Logo />
            <section className="header">
                <h1> New here?</h1>
                <p>Create an account</p>
            </section>
            <section className='accountAndP'>
                <div className="account">
                    <button> <img src="/img/facebook.svg" alt="" /></button>
                    <button> <img src="/img/google1.svg" alt="" /></button>
                    <Link to="/registration">
                        <button> e-mail</button>
                    </Link>
                </div>
                <p className="privacyPolicy">
                    By creating an account,I agree with <a href="#">The Terms of Service</a> and <a href="#">Privacy Policy</a>
                </p>
            </section>

            <section className="signIn">
                <p>Already have an account?</p>
                <a href="signIn"> Sign In</a>
            </section>
        </div>
    )
}

export default CreateAccount;