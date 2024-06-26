import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
  },
  reducers: {
    addProduct: (state, { payload, type }) => {
      const dataExistIndex = state.list.findIndex(
        (data) => data.productName === payload.productName,
      );
      if (dataExistIndex === -1) {
        state.list.push({ ...state.list, payload });
      } else {
        state.list[dataExistIndex] = { ...state.list, payload };
      }
      debugger;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
