import { Products } from "../../app/models/products"
import ProductList from "./ProductList";
import {useState, useEffect} from "react"


export default function Catalog(){
   const [products, SetProducts] = useState<Products[]>([]);

   useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => SetProducts(data))
   }, [])

   return (
      <>
      <ProductList products={products}/>      
      </>
   )
}
