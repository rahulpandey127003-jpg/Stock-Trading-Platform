import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row'>
                <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4 text-muted'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h2 className='fs-4 text-muted'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h2 className='fs-4 text-muted'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h2 className='fs-4 text-muted'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div>
                <div className='col-6'>
                <img src='https://stocktrade-demo.xyz/media/ecosystem.png' alt='#' style={{width:"95%"}}></img>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                </div>
                <div>
                    
                </div>
            </div>    
        </div>
     );
}

export default Stats;