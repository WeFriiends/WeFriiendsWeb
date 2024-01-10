import axios from 'axios'

const accountRegistration = async (
  password1: string,
  password2: string,
  email: string
) => {
  try {
    const result = await axios.post(
      'https://clumsy-glasses-clam.cyclic.app/api/auth/register',
      // 'http://localhost:3002/api/auth/register',
      {
        password: password1,
        password2: password2,
        email: email,
      }
    )

    if (result.status === 200) return true
    else return false
  } catch (err) {
    const er = err as Error
    console.error('Message error for account registration', er.message)
  }
}

export default accountRegistration
