const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        // set the current user value with the payload passed in
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
