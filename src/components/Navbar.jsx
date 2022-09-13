import React, { useState } from 'react'
import HR from './HR'

const settingNavbars = [
    {img: '' , text: 'Overview'},
    {img: <img src={require("../images/clients.png")} alt='banner'/> , text: 'Clients'},
    {img: <img src={require("../images/products.png")} alt='banner'/> , text: 'Products & Services'},
    {img: <img src={require("../images/invoices.png")} alt='banner'/> , text: 'Invoices'},
]

const Navbar = ({type}) => {
    const [showmenu , setShowmenu] = useState(false)

    if(type === 'base'){
        return (
            <>
                <nav className="navbar">
                    <div>
                        <h1>Client Billing</h1>
                    </div>
    
                    <button>
                        <span>Docs</span>&#32;<img src={require("../images/docs.png")} alt="docs" />
                    </button>
                </nav>
    
                <HR/>
            </>
        )
    }
    
    else if(type === 'with-paraph'){
        return (
            <>
                <nav className="navbar">
                    <div>
                        <h1>Client Billing</h1>
    
                        <p>
                            &#45; A full payment solution for your business, free with &#123;company&#125;
                        </p>
                    </div>
    
                    <button>
                        <span>Docs</span>&#32;<img src={require("../images/docs.png")} alt="docs" />
                    </button>
                </nav>
    
                <HR/>
            </>
        )
    }

    else if(type === 'with-setting'){
        return (
            <>
                <nav className="navbar">
                    <div>
                        <h1>Client Billing</h1>
                    </div>
    
                    <button>
                        <span>Docs</span>&#32;<img src={require("../images/docs.png")} alt="docs" />
                    </button>
                </nav>
    
                <HR/>

                <nav className='main-nav'>
                    <ul className='desktop-menu'>
                        {settingNavbars.map( (item , index) => {
                            return <li key={index}>{item.img}{item.text}</li>
                        })}
                    </ul>

                    <button>
                        <img src={require("../images/configure.png")} alt="configure" />
                        <span>Configure</span>
                    </button>

                    <button onClick={() => setShowmenu(value => !value)} className='show-menu'>Menu</button>


                    <ul style={showmenu ? {display: 'block'} : {display: 'none'}} className='mobile-menu tilt-in-right-2'>
                        {settingNavbars.map( (item , index) => {
                            return <li key={index}>{item.img}{item.text}</li>
                        })}
                    </ul>
                </nav>
            </>
        )
    }


}

export default Navbar