import produce from 'immer';

const initialState = {
  user: {
    name: 'User Name',
    email: 'username@gmail.com',
    avatar: 'User Name',
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_USER':
      return produce(state, (draft) => {
        draft.user = {
          active: true,
          name: action.name,
          email: action.email,
          avatar: action.avatar,
        };
      });
    default:
      return state;
  }
}
