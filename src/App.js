import ConnectStripe from './pages/ConnectStripe'
import Loading from './pages/Loading'
import StripeAccount from './pages/StripeAccount'
import Route from './router/Route'
import Continue from './pages/Continue'
const App = () => {
    return (
        <div className="bg-light app">
            <div className="container">
                <Route path='/'>
                    <StripeAccount/>
                </Route>
                <Route path='/connect-stripe'>
                    <ConnectStripe/>
                </Route>
                <Route path='/loading'>
                    <Loading/>
                </Route>
                <Route path='/continue'>
                    <Continue/>
                </Route>
            </div>
        </div>
    )
}

export default App