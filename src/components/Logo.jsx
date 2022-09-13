import React from 'react'

const Logo = () => {
    return (
        <div className="logo">
                    <img src={require("../images/Oval.png")} alt="logo" className='bg-logo' />
                    <img src={require("../images/Stripe.png")} alt="logo" className='word-logo' />
                </div>
    )
}

export default Logo