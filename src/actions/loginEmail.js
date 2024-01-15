import axios from 'axios'

export const loginEmail = async (email, password) => {
  try {
    const result = await axios.post(
      'https://clumsy-glasses-clam.cyclic.app/api/auth/signin',
      // "http://localhost:3002/api/auth/signin",
      {
        email: email,
        password: password,
      }
    )
    return result
  } catch (error) {
    return error
  }
}
