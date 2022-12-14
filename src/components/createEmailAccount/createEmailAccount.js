import './createEmailAccount.css'
import Logo from '../logo/logo';

const CreateEmailAccount = () => {
    return (
        <div className='createEmailAccount'>
            <Logo />
            <section className="header">
                <h1> New here?</h1>
                <p>Create an account</p>
            </section>
            <section className="account">
                <button> <img src="/img/facebook.svg" alt="" /></button>
                <button> <img src="/img/google1.svg" alt="" /></button>
                <button> e-mail</button>
            </section>
            <button className='btn-create'>create</button>
            <label>
                <input type="checkbox" />
                I agree with <a href="#">The Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
            <section className="signIn">
                <p>Already have an account?</p>
                <a href="account"> Sign In</a>
            </section>
        </div>
    )
}

export default CreateEmailAccount;