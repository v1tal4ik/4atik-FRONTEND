import * as Types from '../actions/actionsTypes';

const initialState = {
  id: '',
  email: '',
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
