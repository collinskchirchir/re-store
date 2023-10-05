import { Button } from "@mui/material";
import { Products } from "../../app/models/products"
import ProductList from "./ProductList";

interface Props {
   products: Products[];
   addProduct: () => void;
}
export default function Catalog({products, addProduct}: Props){
   return (
      <>
      <ProductList products={products}/>
      
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </>
   )
}