/* Set Product List */
export const setCalendarData = (data) => {
  return { type: '@app/SET_CALENDAR_DATA', data };
};

export const setLoading = (loading) => {
  return { type: '@app/SET_LOADING', loading };
};
