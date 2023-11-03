import { TextField, debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";
import { useState } from "react";

export default function ProductSearch() {
   const {productParams} = useAppSelector(state => state.catalog);
   const dispatch = useAppDispatch();

   // local state for storing searchterm temporarily
   const [searchTerm, setSearchTerm] = useState(productParams.searchTerm)

   // cause delay dispatch of search action for 1sec
   const debouncedSearch = debounce((event: any) => {
      dispatch(setProductParams({searchTerm: event.target.value}))
   }, 1000)

   return (
      <TextField 
         label="Search products"
         variant="outlined"
         fullWidth
         value={searchTerm || ''}
         onChange={(event: any) => {
            setSearchTerm(event.target.value);
            debouncedSearch(event)
         }}
      />
   )
}