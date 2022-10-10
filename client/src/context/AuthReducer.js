const AuthReducer = ( state, action ) => {
  switch(action.type) {
    case "AUTH_START":
      return {
        user: null,
        isFetching: true,
        error: null
      };
    case "AUTH_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null
      };
    case "AUTH_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;