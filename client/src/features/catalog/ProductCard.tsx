import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Products } from "../../app/models/products";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props {
   product: Products;
}
export default function ProductCard({product}: Props) {
   // const [loading, setLoading] = useState(false);
   const {status} = useAppSelector(state => state.basket);

   const dispatch = useAppDispatch();

   /** --UNECESSARY FN after using Redux Thunk
   function handleAddItem(productId: number){
      setLoading(true);
      agent.Basket.addItem(productId)
         .then(basket => dispatch(setBasket(basket)))
         .catch(error => console.log(error))
         .finally(() => setLoading(false))
   }
   */

   return (
      <Card >
         <CardHeader
            avatar={
               <Avatar sx={{bgcolor: 'secondary.main'}}>
                  {product.name.charAt(0).toUpperCase()}
               </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
               sx: {fontWeight: 'bold', color: 'primary.main'}
            }}
         />
         <CardMedia
            sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
            image={product.pictureUrl}
            title={product.name}
         />
         <CardContent>
            <Typography gutterBottom color="secondary" variant="h5" >
               {currencyFormat(product.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {product.brand} / {product.type}
            </Typography>
         </CardContent>
         <CardActions>
            <LoadingButton 
               loading={status ===`pendingAddItem${product.id}`} 
               onClick={()=> dispatch(addBasketItemAsync({productId: product.id}))} 
               size="small">Add to Cart</LoadingButton>
            <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
         </CardActions>
      </Card>
   )
}