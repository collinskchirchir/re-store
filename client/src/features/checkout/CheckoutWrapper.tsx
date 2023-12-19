import { Elements } from "@stripe/react-stripe-js"
import CheckoutPage from "./CheckoutPage"
import { loadStripe } from "@stripe/stripe-js"
import { useAppDispatch } from "../../app/store/configureStore"
import { useEffect, useState } from "react"
import agent from "../../app/api/agent"
import { setBasket } from "../basket/basketSlice"
import LoadingComponents from "../../app/layout/LoadingComponent"

const stripePromise = loadStripe('pk_test_51OOjmAEHRlzQ85rVRpQtXLYpYA5nVmPqDKB5P8zq3hGZaTZuXgNeTZE6lqWlbDps2s0FXbxb1oqfffY2uAZIEbvf00Gms8emHy')

export default function CheckoutWrapper() {
   const dispatch = useAppDispatch();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      agent.Payments.createPaymentIntent()
         .then(basket => dispatch(setBasket(basket)))
         .catch(error => console.log(error))
         .finally(() => setLoading(false))
   }, [dispatch]);
   if (loading) return <LoadingComponents message="Loading Checkout..." />
   return (
      <Elements stripe={stripePromise}>
         <CheckoutPage />
      </Elements>
   )
}