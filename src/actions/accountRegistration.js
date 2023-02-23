import axios from "axios";

const accountRegistration = async (password1, password2, email) => {
  try {
    const result = await axios.post("http://localhost:3001/api/auth/register", {
      password: password1,
      password2: password2,
      email: email,
    });

    if (result.status === 200) return true;
    else return false;
    
  } catch (err) {
    console.log(err);
  }
};

export default accountRegistration;
