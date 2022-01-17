import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  allPost: [],
  idPost: {},
  createPost: {},
};
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POST_START:
    case types.GET_ID_POST_START:
    case types.CREATE_POST_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        allPost: action.payload,
      };
    case types.GET_ID_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        idPost: action.payload.allPosts,
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        createPost: action.payload,
      };

    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        idPost: {},
      };
    case types.GET_ALL_POST_FAIL:
    case types.GET_ID_POST_FAIL:
    case types.CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default PostReducer;
