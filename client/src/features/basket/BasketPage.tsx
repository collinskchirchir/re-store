import { useEffect, useState } from "react"
import { Basket } from "../../app/models/basket";
import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComponent";
import { Typography } from "@mui/material";

export default function BasketPage() {
   const [loading, setLoading] = useState(true);
   const [basket, setBasket] = useState<Basket | null >(null);

   useEffect(() => {
      agent.Basket.get()
         .then(basket => setBasket(basket))
         .catch(error => console.log(error))
         .finally(() => setLoading(false))
   }, [])

   if(loading) return <LoadingComponents message="Loading basket..."/>

   if(!basket) return <Typography variant="h3">Your basket is Empty!</Typography>
   return(
      <h1>BuyerId = {basket.buyerId}</h1>
   )
}