import produce from 'immer';

const initialState = {
  calendar: [],
  stream: [],
  waffle: [],
  swarm: [],
  radar: [],
  line: [],
  pie: [],
  map: [],
  loading: true,
};

export default function charts(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_CALENDAR_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.calendar = action.data;
      });

    case '@app/SET_LINE_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.line = action.data;
      });

    case '@app/SET_MAP_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.map = action.data;
      });

    case '@app/SET_STREAM_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.stream = action.data;
      });

    case '@app/SET_SWARM_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.swarm = action.data;
      });

    case '@app/SET_RADAR_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.radar = action.data;
      });

    case '@app/SET_PIE_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.pie = action.data;
      });

    case '@app/SET_WAFFLE_DATA':
      // eslint-disable-next-line no-console
      return produce(state, (draft) => {
        draft.waffle = action.data;
      });

    case '@app/SET_LOADING':
      return produce(state, (draft) => {
        draft.loading = action.loading;
      });

    default:
      return state;
  }
}
