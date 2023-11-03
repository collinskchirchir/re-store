import { Grid } from "@mui/material";
import { Products } from "../../app/models/products";
import ProductCard from "./ProductCard";

interface Props {
   products: Products[]
}

export default function ProductList({products}: Props) {
   return (
      <Grid container spacing={4}>
         
            {products.map((product) => (
               <Grid item xs={4} key={product.id}>
                  <ProductCard key={product.id} product={product}/>
               </Grid>
            ))}
         
      </Grid>
   )
}