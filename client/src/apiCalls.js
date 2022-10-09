import axios from "axios";

export const loginCall = async ( userCredentials, dispatch ) => {
  dispatch({ type: "AUTH_START" });
  try {
    const res = await axios.post('api/auth/login', userCredentials);
    dispatch({ type: "AUTH_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "AUTH_FAILURE", payload: err });
  }
};