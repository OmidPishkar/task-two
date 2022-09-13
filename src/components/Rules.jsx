import React from 'react'

const Rules = ({checkedRules}) => {
    const handleChangeRules = event => {
        checkedRules(event.target.checked);
    }

    return (
        <div className='rules'>
            <input onChange={handleChangeRules}
             id='rules' type="checkbox" />
            <label htmlFor="rules">I am aware that I cannot change currency later</label>
        </div>
    )
}

export default Rules