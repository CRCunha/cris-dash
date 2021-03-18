export const setCalendarData = (data) => {
  return { type: '@app/SET_CALENDAR_DATA', data };
};

export const setStreamData = (data) => {
  return { type: '@app/SET_STREAM_DATA', data };
};

export const setPieData = (data) => {
  return { type: '@app/SET_PIE_DATA', data };
};

export const setRadarData = (data) => {
  return { type: '@app/SET_RADAR_DATA', data };
};

export const setWaffleData = (data) => {
  return { type: '@app/SET_WAFFLE_DATA', data };
};

export const setLoading = (loading) => {
  return { type: '@app/SET_LOADING', loading };
};
