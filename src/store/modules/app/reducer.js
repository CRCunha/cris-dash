import produce from 'immer';

const initialState = {
  snackbar: {
    message: '',
    active: false,
    severity: 'error',
    duration: null,
  },
  open: false,
};

/**
 * Reducer to store app State.
 *
 * @param {Controll drawer state} drawerOpen
 */
export default function app(state = initialState, action) {
  switch (action.type) {
    case '@app/OPEN_SNACKBAR':
      return produce(state, (draft) => {
        draft.snackbar = {
          active: true,
          message: action.message,
          severity: action.severity,
          duration: action.duration,
        };
      });

    case '@app/CLOSE_SNACKBAR':
      return produce(state, (draft) => {
        draft.snackbar = {
          ...state.snackbar,
          active: false,
        };
      });

    case '@app/OPEN_MODAL_LOGIN':
      return produce(state, (draft) => {
        draft.open = true;
      });

    case '@app/CLOSE_MODAL_LOGIN':
      return produce(state, (draft) => {
        draft.open = false;
      });

    default:
      return state;
  }
}
