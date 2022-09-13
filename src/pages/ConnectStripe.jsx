import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Link from '../router/Link'
import BackToHome from '../components/BackToHome'
import Alert from '../components/Alert'
import SelectCurrency from '../components/SelectCurrency'
import Rules from '../components/Rules'
import { useState } from 'react'
import Popup from '../components/Popup'
import HeaderBox from '../components/HeaderBox'

const ConnectStripe = () => {
    const [acceptRules , setAcceptRules] = useState(false)

    const handleCheckedRules = bool => {
        if(bool)
            setAcceptRules(true)
        else
            setAcceptRules(false)
    }

    return (
        <div>
            <Navbar type='base'/>

            <div className='box box-2'>
                <div className='header-box'>
                    
                    <h4 className='box-title'>Getting Started</h4>
                    
                    <HeaderBox step='two'/>

                </div>


                <div className="main-box main-box-2">
                    <BackToHome/>

                    


                    <h1 className='main-box-title'>
                        Choose Billing Currency
                    </h1>

                    <p className="main-box-paraph">
                        Select the currency you want to use to bill your clients.                    
                    </p>


                    <Alert/>


                    <SelectCurrency/>

                    <Rules checkedRules={handleCheckedRules}/>

                    <Link to={acceptRules ? '/loading' : ''}>
                        <Button type={acceptRules && 'primary'}>Finish Setup</Button>
                    </Link>


                </div>
            </div>

            <Popup type='success'
            text='Stripe account connected successfully!'
            time='A SECOND AGO'/>
        </div>
    )
}

export default ConnectStripe