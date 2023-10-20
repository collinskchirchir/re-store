import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComponent";
import { Products } from "../../app/models/products"
import ProductList from "./ProductList";
import {useState, useEffect} from "react"


export default function Catalog(){
   const [products, SetProducts] = useState<Products[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // fetch('http://localhost:5000/api/products')
      // .then(res => res.json())
      // .then(data => SetProducts(data))
      agent.Catalog.list()
      .then(products => SetProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
   }, [])

   if (loading) return <LoadingComponents message="Loading Products"/>

   return (
      <> 
      <ProductList products={products}/>      
      </>
   )
}
