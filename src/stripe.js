import { loadStripe } from '@stripe/stripe-js'

const PUBLISHABLE_KEY = 'pk_test_51LitwpGAKTvokZDbSgkwzNcuF1EtCIGdnaK9sK9cAxDwEbrYr4uKzCluF5lcwVIdfwhd4WyQG4Y3BL53fl7c7Mlg00mXT5nBqT'

let stripePromise

const getStripe = () => {
    if ( !stripePromise ) {
        stripePromise = loadStripe(PUBLISHABLE_KEY);
    }

    return stripePromise
}


export default getStripe