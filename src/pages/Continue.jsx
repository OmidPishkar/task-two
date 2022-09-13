import HeaderBox from '../components/HeaderBox'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import Button from '../components/Button'

const Continue = () => {
    return (
        <>
        <Navbar type='base'/>
        <div className='box continue-box'>
            <HeaderBox ste='two'/>

            <div className="main-box main-box-2">
                <Logo/>
                
                <h1 className='main-box-title'>
                    Connect Stripe Account
                </h1>

                <div className='connected'>

                    <div>
                        <label htmlFor="email">&#123;name&#125; Stripe Account</label>
                        <input type="email" placeholder='{emial}'/>
                    </div>

                    <div>
                        <h4>Connected</h4>
                        <img src={require("../images/green-success.png")} alt="connected" />
                    </div>

                </div>

                <Button type='primary'>Continue</Button>
            </div>
        </div>
        </>
    )
}

export default Continue