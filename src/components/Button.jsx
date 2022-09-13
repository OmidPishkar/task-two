import React from 'react'

const Button = ( { children , type } ) => {
    if(type === 'primary'){
        return (
            <button className='primary-button'>{children}</button>
        )
    }
    else 
        return (
            <button className='disable-button'>{children}</button>
        )
}

export default Button