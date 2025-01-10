import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../components/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "../components/CheckoutForm";

// TODO: add pk
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const PaymentPage = () => {
    return (
        <>
        <SectionTitle title={'Payment'} subTitle={'Clear yo payment'}></SectionTitle>
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
        </>
    );
};

export default PaymentPage;