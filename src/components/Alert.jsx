import React from 'react'

const Alert = () => {
    return (
        <div className='alert'>
            <img src={require("../images/alert.png")} alt="alert" />

            <p>
                Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.
            </p>
        </div>
    )
}

export default Alert