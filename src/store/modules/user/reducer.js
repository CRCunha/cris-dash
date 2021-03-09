import produce from 'immer';

const initialState = {
  user: {
    name: 'User Name',
    email: 'user@email.com',
    avatar: 'User',
    logged: false,
  },
  usersList: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@app/UPDATE_USER':
      return produce(state, (draft) => {
        draft.user = {
          logged: action.userObject.logged,
          email: action.userObject.email,
          name: action.userObject.name,
          avatar: action.userObject.avatar,
        };
      });

    case '@app/SET_USER_LIST':
      return produce(state, (draft) => {
        draft.usersList = action.usersObject;
      });

    default:
      return state;
  }
}
