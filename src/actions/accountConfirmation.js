import axios from "axios";

const accountConfirmation = async (confirmationCode) => {
  try {
    const result = await axios.get(
      `http://localhost:3001/api/auth/confirm/${confirmationCode}`,
      confirmationCode
    );
    console.log("result status: ", result.status);
    if (result.status === 200) return true;
    else return false;
  } catch (err) {
    console.log("error:", err);
    return false;
  }
};

export default accountConfirmation;
