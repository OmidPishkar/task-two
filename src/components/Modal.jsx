import Button from './Button'

const Modal = () => {
    return (
        <div className='modal bounce-in-bottom'>
            <div className='modal-texts-logo'>
                
                <img src={require("../images/popup-icon.png")} alt="popup" />

                <div>
                    <h2>Upgrade to pay 0% transaction fee</h2>
                    <p>Pay 0% transaction fee and get added benefits by upgrading your account.</p>
                </div>
            </div>

            <Button type='primary'>Upgrade</Button>
        </div>
    )
}

export default Modal