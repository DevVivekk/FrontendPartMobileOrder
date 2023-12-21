import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const orderProducts = createAsyncThunk("orderProducts", async (item) => {
  try {
    const response = await axios.post("https://mybackedserver.onrender.com/server/api/phoneorder",item);
    if(response.status===201){
      alert("Sent successfully!")
    }
  } catch (err) {
    return err;
  }
});

export const OrderedSlice = createSlice({
  name: "OrderedSlice",
  initialState: {
   ordered:[],
   loading:true,
   error:null
  },
  reducers: {
    addToCart: (state, action) => {
   
    }
  },
  extraReducers: (builder) => {
    builder.addCase(orderProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(orderProducts.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(orderProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { addToCart: addToCartReducer} = OrderedSlice.actions;
export default OrderedSlice.reducer;
