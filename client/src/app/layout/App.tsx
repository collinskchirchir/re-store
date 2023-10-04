import {useState, useEffect} from "react"
import { Products } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, SetProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => SetProducts(data))
  }, [])

  function addProduct(){
    SetProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'              
      }])
  }
    
    

  return (
    <>
    <div className="app">
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
      

    </div>
    </>
  )
}

export default App
