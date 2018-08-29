import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm'; // must be a child of Elements wrapper

class Donate extends Component {

    render() {
        // api Key here is the publishable key and needs the secret key to be used so it is ok to make public
        return (
            <StripeProvider apiKey="pk_test_fUN9BfC4uQD2SS1o14ihYW8K">
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }

}

export default Donate;