import React, { useEffect, useState } from 'react'

const Popup = ({type , time , text}) => {
    const [showPopup , setShowPopup] = useState(true)

    useEffect( () => {
        setTimeout( () => {
            setShowPopup(false)
        } , 3000)
    } , [])

    if(type === 'success'){
        return (
            <div style={showPopup ? {display: 'flex'} : {display: 'none'}} className='popup tilt-in-left-1'>
                <img src={require("../images/success.png")} alt="success" />

                <div>
                    <p>{text}</p>

                    <p>{time}</p>
                </div>
            </div>
        )

    } else if(type === 'error'){
        return (
            <div className='popup tilt-in-left-1'>Popup</div>
        )
    }else if(type === 'alert'){
        return (
            <div className='popup tilt-in-left-1'>Popup</div>
        )
    }
}

export default Popup