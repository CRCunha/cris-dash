import produce from 'immer';

const initialState = {
  snackbar: {
    message: '',
    active: false,
    severity: 'error',
  },
  openModalUser: false,
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
        };
      });

    case '@app/CLOSE_SNACKBAR':
      return produce(state, (draft) => {
        draft.snackbar = {
          ...state.snackbar,
          active: false,
        };
      });

    case '@app/OPEN_MODAL_USER':
      return produce(state, (draft) => {
        draft.openModalUser = true;
      });

    case '@app/CLOSE_MODAL_USER':
      return produce(state, (draft) => {
        draft.openModalUser = false;
      });

    default:
      return state;
  }
}
