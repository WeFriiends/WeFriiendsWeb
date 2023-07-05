import axios from 'axios'

const accountConfirmation = async (confirmationCode) => {
  try {
    const result = await axios.get(
      `http://clumsy-glasses-clam.cyclic.app/api/auth/confirm/${confirmationCode}`,
      // `http://localhost:8080/api/auth/confirm/${confirmationCode}`,
      confirmationCode
    )
    if (result.status === 200) return true
    else return false
  } catch (err) {
    console.log('error:', err)
    return false
  }
}

export default accountConfirmation
