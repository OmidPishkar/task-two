import {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { historyPushState } from '../router/history'

const Loading = () => {
    useEffect( () => {
        setTimeout ( () => {
            historyPushState({} , '' , '/continue')
        } , 6000)
    } , [])
    
    return (
        <>
            <Navbar type='with-setting'/>
            <div className='box loading-box'>
                <div className="spin"></div>

                <h2 className='loading-title'>
                    Importing Stripe Configurations
                </h2>

                <p className='loading-paraph'>
                    Please wait while we are importing your Stripe configurations. It will only<br/>take a few seconds…
                </p>
            </div>
        </>
    )
}

export default Loading