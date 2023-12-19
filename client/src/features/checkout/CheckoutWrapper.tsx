import { Elements } from "@stripe/react-stripe-js"
import CheckoutPage from "./CheckoutPage"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe('pk_test_51OOjmAEHRlzQ85rVRpQtXLYpYA5nVmPqDKB5P8zq3hGZaTZuXgNeTZE6lqWlbDps2s0FXbxb1oqfffY2uAZIEbvf00Gms8emHy')

export default function CheckoutWrapper() {
   return (
      <Elements stripe={stripePromise}>
         <CheckoutPage />
      </Elements>
   )
}