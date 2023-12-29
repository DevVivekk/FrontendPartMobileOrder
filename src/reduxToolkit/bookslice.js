import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getBookData = createAsyncThunk("getBookData", async ({item,page}) => {
  try {
      const { data } = await axios.get(
        `https://caridea-hoodie.cyclic.app/server/api/getphones?phone_name=${item}&page=${page}`
      );
      return data;
  } catch (err) {
    return err;
  }
});

export const BookSlice = createSlice({
  name: "BookSlice",
  initialState: {
    data: [],
    cart: [],
    orders:[],
    loading: true,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
        //USING IMAGE AS ID
      const existingItem = state.cart.find(
        (item) => item.phone_image === action.payload.phone_image
      );

    // another use findIndex method then simply update if itemindex>=0? then state.cart[itemindex].quantity +=1

      if (existingItem) {
        // If item already exists, update its quantity
        state.cart = state.cart.map((item) =>
          item.phone_image === action.payload.phone_image
            ? { ...item, quantity: item.quantity + 1}
            : item
        )
      } else {
        // If item doesn't exist, add it to the cart
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    //   // Unwrap Proxy objects before logging
    //   const unwrappedCart = state.cart.map((item) =>
    //     JSON.parse(JSON.stringify(item))
    //   );
    //   console.log(unwrappedCart);
    },

    removeToCart:(state,action)=>{
      state.cart = state.cart.filter((item)=>item.phone_image!==action.payload)
    },

    incrementProduct:(state,action)=>{
      state.cart= state.cart.map((item)=>item.phone_image===action.payload?{...item,quantity:item.quantity+1}:item);
    },
    decrementProduct:(state,action)=>{
      const checkdecreproduct = state.cart.find((item)=>item.phone_image===action.payload);
      if(checkdecreproduct.quantity===1){
        state.cart = state.cart.filter((item)=>item.phone_image!==action.payload);
      }else{
      state.cart= state.cart.map((item)=>item.phone_image===action.payload?{...item,quantity:item.quantity-1}:item);
      }
    },
    emptyCart:(state,action)=>{
      state.cart=[];
    },
    checkOut:(state,action)=>{
      const myOrders = state.cart.map((item)=>({...item,date:new Date().toLocaleString()}))
       state.orders=myOrders;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBookData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getBookData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getBookData.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { addToCart: addToCartReducer,removeToCart,incrementProduct,decrementProduct,emptyCart,checkOut } = BookSlice.actions;
export default BookSlice.reducer;
