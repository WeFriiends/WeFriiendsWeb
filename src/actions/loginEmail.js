import axios from "axios";

const LoginEmail = async (email, password) => {
  try {
    const result = await axios.post(
      "https://clumsy-glasses-clam.cyclic.app/api/auth/signin",
      {
        email: email,
        password: password,
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default LoginEmail;
