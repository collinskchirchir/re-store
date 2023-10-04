import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Button } from "@mui/material";
import { Products } from "../../app/models/products"

interface Props {
   products: Products[];
   addProduct: () => void;
}
export default function Catalog({products, addProduct}: Props){
   return (
      <>
      <List>
         
            {products.map((product) => (
               <ListItem key={product.id}>
                  <ListItemAvatar>
                     <Avatar src={product.pictureUrl}/>
                  </ListItemAvatar>
                  <ListItemText>
                     {product.name} - {product.price}
                  </ListItemText>
               </ListItem>
            ))}
         
      </List>
      
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </>
   )
}