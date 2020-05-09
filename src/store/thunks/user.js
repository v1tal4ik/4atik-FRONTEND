import { userSignIn } from '../../api/user';
import { setUserData } from '../actions/user';

export const signInThunk = ({ email, password }, callback) => {
  return async (dispatch) => {
    const response = await userSignIn({ email, password });
    if (response.status) {
      const { user, auth } = response;
      localStorage.setItem(`${user.id}`, JSON.stringify(auth));
      dispatch(setUserData(user));
      callback();
    } else {
      alert(response.msg);
    }
  };
};
