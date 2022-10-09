const AuthReducer = ( state, action ) => {
  switch(action.type) {
    case "AUTH_START":
      return {
        user: null,
        isFetching: true,
        error: false
      };
    case "AUTH_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    case "AUTH_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};

export default AuthReducer;