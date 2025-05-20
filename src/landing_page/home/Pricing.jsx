import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col border'>
                            <h1><i class="fa fa-inr" aria-hidden="true"></i> 0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1><i class="fa fa-inr" aria-hidden="true"></i> 20</h1>
                            <p>Free equity delivery <br />and direct mutual funds</p>
                        </div>
                    </div>
                </div>
                <a href="">See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

export default Pricing;