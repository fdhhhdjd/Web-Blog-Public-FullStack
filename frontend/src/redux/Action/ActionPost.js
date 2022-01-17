import axios from "axios";
import * as types from "../ActionTypes";
//?Get All Post
export const GetAllPostStart = () => ({
  type: types.GET_ALL_POST_START,
});
export const GetAllPostSuccess = (token) => ({
  type: types.GET_ALL_POST_SUCCESS,
  payload: token,
});
export const GetAllPostFail = (error) => ({
  type: types.GET_ALL_POST_FAIL,
  payload: error,
});
//?Get ID Post
export const GetIdPostStart = () => ({
  type: types.GET_ID_POST_START,
});
export const GetIdPostSuccess = (token) => ({
  type: types.GET_ID_POST_SUCCESS,
  payload: token,
});
export const GetIdPostFail = (error) => ({
  type: types.GET_ID_POST_FAIL,
  payload: error,
});
//?Create Post
export const CreatePostStart = () => ({
  type: types.CREATE_POST_START,
});
export const CreatePostSuccess = (token) => ({
  type: types.CREATE_POST_SUCCESS,
  payload: token,
});
export const CreatePostFail = (error) => ({
  type: types.CREATE_POST_FAIL,
  payload: error,
});

//!Get All Post
export const GetAllPostInitiate = () => async (dispatch) => {
  try {
    dispatch(GetAllPostStart());

    const { data } = await axios.get(`/api/post/allpost`);

    dispatch(GetAllPostSuccess(data.posts));
  } catch (error) {
    dispatch(GetAllPostFail(error));
  }
};
export const GetIdPostInitiate = (id) => async (dispatch) => {
  try {
    dispatch(GetIdPostStart());
    const { data } = await axios.get(`/api/post/getId/${id}`);
    dispatch(GetIdPostSuccess(data));
  } catch (error) {
    dispatch(GetIdPostFail(error));
  }
};
export const CreatePostInitiate =
  (token, { ...state }) =>
  async (dispatch) => {
    try {
      dispatch(CreatePostStart());
      const { data } = await axios.post(
        "api/post/create",
        { headers: { Authorization: token } },
        {
          ...state,
        }
      );
      dispatch(CreatePostSuccess(data));
    } catch (error) {
      dispatch(CreatePostFail(error));
    }
  };
//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
};
