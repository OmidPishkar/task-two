import Link from '../router/Link'
import Button from './Button'
import HeaderBox from './HeaderBox'
import Logo from './Logo'

const GetStart1 = () => {
    return (
        <div className='box'>
            <HeaderBox step='one'/>

            <div className="main-box">
                
                <Logo/>

                <h1 className='main-box-title'>
                    Connect Stripe Account
                </h1>

                <p className="main-box-paraph">
                    Client Billing requires a free Stripe account. Connect your existing account or create a new one.
                </p>

                <div className="transaction">
                    <h2>Transaction Fee</h2>

                    <h4>5%</h4>
                </div>

                <Link to='/connect-stripe'>
                    <Button type='primary'>Get Started</Button>
                </Link>

                <a href='/' className='find-more'>
                    <span>Find out more about Client Billing</span>
                    <img src={require("../images/blue-blank.png")} alt="" />
                </a>

            </div>
        </div>
    )
}

export default GetStart1