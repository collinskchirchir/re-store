import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../app/models/products";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/configureStore";

const productsAdapter = createEntityAdapter<Products>();

export const fetchProductsAsync = createAsyncThunk<Products[]>(
   'catalog/fetchProductsAsync',
   async (_, thunkAPI) => {
      try {
         return await agent.Catalog.list();
      } catch (error: any) {
         return thunkAPI.rejectWithValue({error: error.data})
      }
   }
)

export const fetchProductAsync = createAsyncThunk<Products, number>(
   'catalog/fetchProductAsync',
   async (productId, thunkAPI) => {
      try {
         return await agent.Catalog.details(productId);
      } catch (error: any) {
         return thunkAPI.rejectWithValue({error: error.data})
      }
   }
)

export const fetchFilters = createAsyncThunk(
   'catalog/fetchFilters',
   async(_, thunkAPI) => {
      try {
         return agent.Catalog.fetchFilters();
      } catch (error: any) {
         return thunkAPI.rejectWithValue({error: error.data})
      }
   }
)

export const catalogSlice = createSlice({
   name: 'catalog',
   initialState: productsAdapter.getInitialState({
      productsLoaded: false,
      filtersLoaded: false,
      status: 'idle',
      brands: [],
      types: []
   }),
   reducers: {},
   extraReducers: (builder => {
      // fetch all products
      builder.addCase(fetchProductsAsync.pending, (state) => {
         state.status = 'pendingFetchProducts';
      });
      builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
         productsAdapter.setAll(state, action.payload);
         state.status = 'idle';
         state.productsLoaded = true;
      });
      builder.addCase(fetchProductsAsync.rejected, (state, action) => {
         console.log(action.payload)
         state.status = 'idle'
      });

      // fetch a single Product
      builder.addCase(fetchProductAsync.pending, (state) => {
         state.status = 'pendingFetchProduct'
      });
      builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
         // used entityAdapter
         productsAdapter.upsertOne(state, action.payload);
         state.status = 'idle';
      });
      builder.addCase(fetchProductAsync.rejected, (state, action) => {
         console.log(action)
         state.status = 'idle'
      });

      //filter brands & types
      builder.addCase(fetchFilters.pending, (state) => {
         state.status = 'pendingFetchFilters';
      })
      builder.addCase(fetchFilters.fulfilled, (state, action) => {
         state.brands = action.payload.brands;
         state.types = action.payload.types;
         state.filtersLoaded = true;
         state.status = 'idle'
      })
      builder.addCase(fetchFilters.rejected, (state, action) => {
         console.log(action.payload);
         state.status = 'idle';
      })
   })
})

export const productSelectors = productsAdapter.getSelectors((state: RootState) => state.catalog)