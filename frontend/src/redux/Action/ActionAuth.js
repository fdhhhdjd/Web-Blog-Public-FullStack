import axios from "axios";
import * as types from "../ActionTypes";
//?Register
export const RegisterStart = () => ({
  type: types.REGISTER_API_START,
});
export const RegisterSuccess = (apis) => ({
  type: types.REGISTER_API_SUCCESS,
  payload: apis,
});
export const RegisterFail = (error) => ({
  type: types.REGISTER_API_FAIL,
  payload: error,
});
//?Login
export const LoginStart = () => ({
  type: types.LOGIN_API_START,
});
export const LoginSuccess = (api) => ({
  type: types.LOGIN_API_SUCCESS,
  payload: api,
});
export const LoginFail = (error) => ({
  type: types.LOGIN_API_FAIL,
  payload: error,
});
//?Login Google
export const LoginGoogleStart = () => ({
  type: types.LOGIN_GOOGLE_START,
});
export const LoginGoogleSuccess = (api) => ({
  type: types.LOGIN_GOOGLE_SUCCESS,
  payload: api,
});
export const LoginGoogleFail = (error) => ({
  type: types.LOGIN_GOOGLE_FAIL,
  payload: error,
});
//?Logout
export const LogoutStart = () => ({
  type: types.LOGOUT_API_START,
});
export const LogoutSuccess = () => ({
  type: types.LOGOUT_API_SUCCESS,
});
export const LogoutFail = () => ({
  type: types.LOGOUT_API_FAIL,
});

//?Forget
export const ForgetStart = () => ({
  type: types.FORGET_PASS_START,
});
export const ForgetSuccess = (admin) => ({
  type: types.FORGET_PASS_SUCCESS,
  payload: admin,
});
export const ForgetFail = (error) => ({
  type: types.FORGET_PASS_FAIL,
  payload: error,
});
//?Reset
export const ResetPassStart = () => ({
  type: types.RESET_PASSWORD_START,
});
export const ResetPassSuccess = (admin) => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload: admin,
});
export const ResetPassFail = (error) => ({
  type: types.RESET_PASSWORD_FAIL,
  payload: error,
});

//? refresh_token
export const RefreshTokenStart = () => ({
  type: types.REFRESH_TOKEN_ADMIN_START,
});
export const RefreshTokenSuccess = (token) => ({
  type: types.REFRESH_TOKEN_ADMIN_SUCCESS,
  payload: token,
});
export const RefreshTokenFail = (error) => ({
  type: types.REFRESH_TOKEN_ADMIN_FAIL,
  payload: error,
});

//? ChangePassword
export const ChangePasswordAdminStart = () => ({
  type: types.CHANGE_PASSWORD_START,
});
export const ChangePasswordAdminSuccess = (token) => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
  payload: token,
});
export const ChangePasswordAdminFail = (error) => ({
  type: types.CHANGE_PASSWORD_FAIL,
  payload: error,
});
//? Get Profile
export const GetProfileStart = () => ({
  type: types.GET_PROFILE_START,
});
export const GetProfileSuccess = (token) => ({
  type: types.GET_PROFILE_SUCCESS,
  payload: token,
});
export const GetProfileFail = (error) => ({
  type: types.GET_PROFILE_FAIL,
  payload: error,
});

//!Register
export const RegisterInitiate = (name, email, password) => async (dispatch) => {
  try {
    dispatch(RegisterStart());

    const { data } = await axios.post(`/api/auth/register`, {
      name,
      email,
      password,
    });

    dispatch(RegisterSuccess(data));
  } catch (error) {
    dispatch(RegisterFail(error));
  }
};
//!Login
export const loginInitiate = (email, password) => async (dispatch) => {
  try {
    dispatch(LoginStart());

    const { data } = await axios.post(`/api/auth/login`, { email, password });

    dispatch(LoginSuccess(data));
  } catch (error) {
    dispatch(LoginFail(error));
  }
};
//!Login Google
export const loginGoogleInitiate = (response) => {
  return async function (dispatch) {
    dispatch(LoginGoogleStart());
    await axios
      .post("/api/auth/loginGoogle", { tokenId: response.tokenId })
      .then((user) => {
        dispatch(
          LoginGoogleSuccess(user.data),
          localStorage.setItem("firstLogin", true)
        );
      })
      .catch((error) => {
        dispatch(LoginGoogleFail(error.data));
      });
  };
};
// //!Logout
export const LogoutInitiate = () => async (dispatch) => {
  try {
    dispatch(LogoutStart());

    await axios.get(`/api/auth/logout`);
    dispatch(
      LogoutSuccess(
        localStorage.removeItem("firstLogin"),
        (window.location.href = "/login")
      )
    );
  } catch (error) {
    dispatch(LoginFail(error));
  }
};

// //!Forget Admin
export const ForgetAdminInitiate = (email) => async (dispatch) => {
  try {
    dispatch(ForgetStart());

    const { data } = await axios.post("/api/auth/forget", {
      email,
    });

    dispatch(ForgetSuccess(data));
  } catch (error) {
    dispatch(ForgetFail(error));
  }
};
// //!Reset Admin
export const ResetPassInitiate =
  (token, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch(ResetPassStart());

      const { data } = await axios.put(`/api/auth/password/reset/${token}`, {
        password,
        confirmPassword,
      });

      dispatch(ResetPassSuccess(data));
    } catch (error) {
      dispatch(ResetPassFail(error));
    }
  };

// //!Refresh_token
export const RefreshTokenInitiate = (token) => async (dispatch) => {
  try {
    dispatch(RefreshTokenStart());

    const { data } = await axios.get(`/api/auth/refresh_token`, {
      headers: { Authorization: token },
    });

    dispatch(RefreshTokenSuccess(data));
  } catch (error) {
    dispatch(RefreshTokenFail(error));
  }
};
// //!profile
export const ProfileInitiate = (token) => async (dispatch) => {
  try {
    dispatch(GetProfileStart());

    const { data } = await axios.get(`/api/auth/profile`, {
      headers: { Authorization: token },
    });

    dispatch(GetProfileSuccess(data.user));
  } catch (error) {
    dispatch(GetProfileFail(error));
  }
};
// //!ChangePassword

export const ChangeAdminInitiate =
  (token, { ...state }) =>
  async (dispatch) => {
    try {
      dispatch(ChangePasswordAdminStart());
      const { data } = await axios.patch(
        `/api/auth/changePassword`,
        { ...state },
        {
          headers: { Authorization: token },
        }
      );
      dispatch(ChangePasswordAdminSuccess(data));
    } catch (error) {
      dispatch(ChangePasswordAdminFail(error));
    }
  };
//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
};
