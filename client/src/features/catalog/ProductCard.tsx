import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Products } from "../../app/models/products";

interface Props {
   product: Products;
}
export default function ProductCard({product}: Props) {
   return (
      <ListItem key={product.id}>
         <ListItemAvatar>
            <Avatar src={product.pictureUrl}/>
         </ListItemAvatar>
         <ListItemText>
            {product.name} - {product.price}
         </ListItemText>
      </ListItem>
   )
}