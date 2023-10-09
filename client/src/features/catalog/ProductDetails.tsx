import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../app/models/products";

export default function ProductDetails() {
   const {id} = useParams<{id: string}>();
   const [product, setProduct] = useState<Products | null>(null)
   const [loading, setLoading] = useState(true)
   
   useEffect(() => {
      axios.get(`http://localhost:5000/api/products/${id}`)
      .then(resp => setProduct(resp.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
   }, [id])

   if(loading) return <h3>Loading</h3>
   if(!product) return <h3>Product not Found</h3>

   return (
      <Typography variant="h2">
         {product.name}
      </Typography>
   )
}