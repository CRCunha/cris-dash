import produce from 'immer';

const initialState = {
  products: [],
  loading: true,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_PRODUCT_LIST':
      return produce(state, (draft) => {
        draft.products = action.productsObject;
      });

    case '@app/SET_LOADING':
      return produce(state, (draft) => {
        draft.loading = action.loading;
      });

    default:
      return state;
  }
}
