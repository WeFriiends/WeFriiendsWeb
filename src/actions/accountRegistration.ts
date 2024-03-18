import axios from 'axios'

export enum AccountRegistrationResult {
  SUCCESS,
  TECHNICAL_ERROR,
  EMAIL_ALREADY_USED,
}

const accountRegistration = async (
  password1: string,
  password2: string,
  email: string
): Promise<AccountRegistrationResult> => {
  try {
    const result = await axios.post(
      // 'https://clumsy-glasses-clam.cyclic.app/api/auth/register',
      'http://localhost:8080/api/auth/register',
      {
        password: password1,
        password2: password2,
        email: email,
      }
    )

    if (result.status !== 200) return AccountRegistrationResult.TECHNICAL_ERROR

    if (
      result.data.message ===
      'This email address is already associated with an account'
    ) {
      return AccountRegistrationResult.EMAIL_ALREADY_USED
    }
    return AccountRegistrationResult.SUCCESS
  } catch (err) {
    const er = err as Error
    console.error('Message error for account registration', er.message)
    return AccountRegistrationResult.TECHNICAL_ERROR
  }
}

export default accountRegistration
