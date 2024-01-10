import axios from 'axios'

const accountConfirmation = async (confirmationCode) => {
  try {
    const result = await axios.get(
      `https://clumsy-glasses-clam.cyclic.app/api/auth/confirm/${confirmationCode}`,
      confirmationCode
    )
    if (result.status === 200) return true
    else return false
  } catch (err) {
    console.error('Error account confirmation:', err)
    return false
  }
}

export default accountConfirmation
