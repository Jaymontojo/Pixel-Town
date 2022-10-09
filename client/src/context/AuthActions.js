export const AuthStart = (userCredentials) => ({
  type: "AUTH_START"
});

export const AuthSuccess = (user) => ({
  type: "AUTH_SUCCESS",
  payload: user
});

export const AuthFailure = (error) => ({
  type: "AUTH_FAILURE",
  payload: error
});