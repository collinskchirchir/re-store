import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../app/models/products";
import agent from "../../app/api/agent";

const productsAdapter = createEntityAdapter<Products>();

export const fetchProductsAsync = createAsyncThunk<Products[]>(
   'catalog/fetchProductAsync',
   async () => {
      try {
         return await agent.Catalog.list();
      } catch (error) {
         console.log(error)
      }
   }
)

export const catalogSlice = createSlice({
   name: 'catalog',
   initialState: productsAdapter.getInitialState({
      productsLoaded: false,
      status: 'idle'
   }),
   reducers: {},
   extraReducers: (builder => {
      builder.addCase(fetchProductsAsync.pending, (state) => {
         state.status = 'pendingFetchProducts';
      });
      builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
         productsAdapter.setAll(state, action.payload);
         state.status = 'idle';
         state.productsLoaded = true;
      });
      builder.addCase(fetchProductsAsync.rejected, (state) => {
         state.status = 'idle'
      });
   })
})