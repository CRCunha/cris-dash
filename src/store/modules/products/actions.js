/* Set Product List */
export const setProductList = (productsObject) => {
  return { type: '@app/SET_PRODUCT_LIST', productsObject };
};

export const setLoading = (loading) => {
  return { type: '@app/SET_LOADING', loading };
};
