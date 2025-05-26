import React from 'react';
import Brokerage from './Brokerage.jsx'
import Hero from './Hero.jsx'
import OpenAccount from '../OpenAccount.jsx';

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <Brokerage/>
            <OpenAccount/>
        </>
     );
}

export default PricingPage;