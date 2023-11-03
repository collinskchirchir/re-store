import LoadingComponents from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import {useEffect} from "react"
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";


export default function Catalog(){
   const products = useAppSelector(productSelectors.selectAll);
   const { productsLoaded, status, filtersLoaded } = useAppSelector(state => state.catalog)
   const dispatch = useAppDispatch();

   useEffect(() => { 
      if(!productsLoaded) dispatch(fetchProductsAsync());
   }, [productsLoaded, dispatch])
   
   // using a different useEffect to prevent double fetching on network
   useEffect(() => {
      if(!filtersLoaded) dispatch(fetchFilters());      
   }, [fetchFilters, dispatch])

   if (status.includes('pending')) return <LoadingComponents message="Loading Products"/>

   return ( 
      <> 
      <ProductList products={products}/>      
      </>
   )
}
