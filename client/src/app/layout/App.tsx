import {useState, useEffect} from "react"
import { Products } from "../models/products";

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
      <h1>Re-Store</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>

    </div>
    </>
  )
}

export default App
