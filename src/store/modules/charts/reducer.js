import produce from 'immer';

const initialState = {
  calendar: [],
  stream: [],
  loading: true,
};

export default function charts(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_CALENDAR_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.calendar = action.data;
      });

    case '@app/SET_STREAM_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.stream = action.data;
      });

    case '@app/SET_LOADING':
      return produce(state, (draft) => {
        draft.loading = action.loading;
      });

    default:
      return state;
  }
}
