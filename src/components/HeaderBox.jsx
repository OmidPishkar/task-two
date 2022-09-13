import React from 'react'

const HeaderBox = ({step}) => {
    if(step === 'one'){
        return (
            <div className='header-box'>
                    
                    <h4 className='box-title'>Getting Started</h4>
                    
                    <div className='steps'>
                        <h6>Step 1 of 2</h6>
                        <div className='full-point'></div>
                        <div className='empty-point'></div>
                    </div>
    
                </div>
        )
    }
    else {
        return (
            <div className='header-box'>
                    
                    <h4 className='box-title'>Getting Started</h4>
                    
                    <div className='steps'>
                        <h6>Step 2 of 2</h6>
                        <div className='empty-point'></div>
                        <div className='full-point'></div>
                    </div>
    
                </div>
        )
    }
}

export default HeaderBox