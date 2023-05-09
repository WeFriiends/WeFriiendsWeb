import axios from "axios";

const accountRegistration = async (password1, password2, email) => {
  try {
    const result = await axios.post(
      "https://clumsy-glasses-clam.cyclic.app/api/auth/register",
      // "http://localhost:3002/api/auth/register",
      {
        password: password1,
        password2: password2,
        email: email,
      }
    );

    if (result.status === 200) return true;
    else return false;
  } catch (err) {
    console.log(err.response);
  }
};

export default accountRegistration;
