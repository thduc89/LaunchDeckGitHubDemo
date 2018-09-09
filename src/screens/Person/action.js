export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUser = username => {
  return async dispatch => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          dispatch(getUserSuccess(data));
        } else {
          dispatch(getUserSuccess("Fail to get user information"));
        }
      })
      .catch(error => {
        console.error(error);
        dispatch(getUserSuccess("Fail to get user information"));
      });
  };
};

export const getUserSuccess = user => {
  return dispatch => {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: {
        user: user,
      },
    });
  };
};

export const getUserFail = message => {
  return {
    type: GET_USER_FAIL,
    payload: {
      message: message,
    },
  };
};
