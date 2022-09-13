import Link from '../router/Link'

const BackToHome = () => {
    return (
        <div className='back-section'>
            <Link to='/'>
                <img src={require("../images/Back Icon.png")} alt='back'/>
                <h5>Back</h5>
            </Link>
        </div>
    )
}

export default BackToHome