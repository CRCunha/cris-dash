import produce from 'immer';

const initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_PRODUCT_LIST':
      return produce(state, (draft) => {
        draft.products = action.productsObject;
      });

    default:
      return state;
  }
}
