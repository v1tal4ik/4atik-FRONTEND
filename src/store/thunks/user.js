import { userSignIn, fetchUserData } from '../../api/user';
import { setUserData } from '../actions/user';

export const signInThunk = ({ email, password }, callback) => {
  return async (dispatch) => {
    const response = await userSignIn({ email, password });
    if (response.status) {
      const { user, auth } = response;
      localStorage.setItem('auth', JSON.stringify({ id: user.id, ...auth }));
      dispatch(setUserData(user));
      callback();
    } else {
      alert(response.msg);
    }
  };
};

export const fetchUserdDataThunk = () => {
  return async (dispatch) => {
    const response = await fetchUserData();
    if (response.status) {
      const { user } = response;
      dispatch(setUserData(user));
    } else {
      alert(response.msg);
    }
  };
};
