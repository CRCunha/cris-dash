import produce from 'immer';

const initialState = {
  user: {
    name: 'User Name',
    email: 'username@gmail.com',
    avatar: 'User Name',
    logged: false,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_USER_LOGGED':
      return produce(state, (draft) => {
        draft.user = {
          ...state.user,
          email: action.userObject.email,
          logged: true,
        };
      });

    case '@app/UPDATE_USER':
      return produce(state, (draft) => {
        draft.user = {
          ...state.user,
          email: action.userObject.email,
          name: action.userObject.name,
          avatar: action.userObject.avatar,
        };
      });

    default:
      return state;
  }
}
